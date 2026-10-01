#!/usr/bin/env node
// Regenerates static HTML snapshots of the marketing/legal pages so
// non-JS-executing crawlers (most AI bots: GPTBot, ClaudeBot, PerplexityBot,
// CCBot — see public/robots.txt) see real page content instead of this
// SPA's empty <div id="root">.
//
// This is a LOCAL/manual tool, not part of `pnpm run build`. Playwright is a
// devDependency, but it never auto-downloads its browser on install (that's
// always an explicit separate command) — so it adds zero risk to Railway's
// build, which never calls that command (see public/<route>/index.html,
// which Railway's build just copies into dist/ like any other static asset).
//
// Re-run this whenever Pricing/Terms/Privacy/About/Contact copy changes,
// then commit the regenerated public/<route>/index.html files.
//
// Usage (from the Terratrail repo root):
//   npx playwright install chromium   (first time per machine only)
//   node scripts/prerender.mjs

import { build, preview } from 'vite'
import { chromium } from 'playwright'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// Playwright's default headless launch uses a lightweight "headless shell"
// binary, which hangs on its devtools-pipe handshake in some sandboxed
// environments. If the full Chromium build is present (installed alongside
// the shell by `playwright install chromium`), launch that one instead.
function findFullChromiumExecutable() {
  const cacheDir = path.join(
    process.env.PLAYWRIGHT_BROWSERS_PATH || path.join(process.env.LOCALAPPDATA ?? '', 'ms-playwright'),
  )
  if (!existsSync(cacheDir)) return undefined
  const candidates = readdirSync(cacheDir).filter((name) => /^chromium-\d+$/.test(name))
  for (const dir of candidates) {
    const exe = path.join(cacheDir, dir, 'chrome-win64', 'chrome.exe')
    if (existsSync(exe)) return exe
  }
  return undefined
}

const ROUTES = ['/about', '/pricing', '/privacy', '/terms', '/contact']
const PORT = 4321

async function main() {
  // Remove any previous snapshots first so a stale public/<route>/index.html
  // can't short-circuit the preview server's SPA fallback and freeze
  // regeneration on old content.
  for (const route of ROUTES) {
    await rm(path.join(root, 'public', route.slice(1)), { recursive: true, force: true })
  }

  console.log('Building a clean dist/ to prerender against...')
  await build({ root, logLevel: 'warn' })

  const server = await preview({ root, preview: { port: PORT, strictPort: true } })
  const base = `http://localhost:${PORT}`

  const fullChromiumPath = findFullChromiumExecutable()
  const browser = await chromium.launch(
    fullChromiumPath ? { executablePath: fullChromiumPath } : undefined,
  )
  const page = await browser.newPage()

  for (const route of ROUTES) {
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' })
    const html = await page.content()
    const outDir = path.join(root, 'public', route.slice(1))
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html, 'utf-8')
    console.log(`Prerendered ${route} -> public${route}/index.html`)
  }

  await browser.close()
  await new Promise((resolve) => server.httpServer.close(resolve))

  console.log('\nDone. Run `pnpm run build` again to fold these into dist/,')
  console.log('or just commit public/ as-is — Railway\'s own build will pick it up.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
