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
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// Playwright's default headless launch uses a lightweight "headless shell"
// binary. It hangs on its devtools-pipe handshake in some sandboxed
// environments, AND — more importantly — snapshots it produces are not
// byte-identical to the full Chromium build's output (different animation/
// paint timing for framer-motion's viewport-triggered elements), which
// caused CI's regenerated pages to drift from locally-generated ones that
// used the full binary. So: always use the full build, on every platform,
// for deterministic output across machines.
function defaultPlaywrightCacheDir() {
  if (process.env.PLAYWRIGHT_BROWSERS_PATH) return process.env.PLAYWRIGHT_BROWSERS_PATH
  if (process.platform === 'win32') return path.join(process.env.LOCALAPPDATA ?? '', 'ms-playwright')
  if (process.platform === 'darwin') return path.join(os.homedir(), 'Library', 'Caches', 'ms-playwright')
  return path.join(os.homedir(), '.cache', 'ms-playwright')
}

const FULL_CHROMIUM_RELATIVE_PATHS = [
  ['chrome-win64', 'chrome.exe'],
  ['chrome-linux64', 'chrome'],
  ['chrome-linux', 'chrome'],
  ['chrome-mac', 'Chromium.app', 'Contents', 'MacOS', 'Chromium'],
]

function findFullChromiumExecutable() {
  const cacheDir = defaultPlaywrightCacheDir()
  if (!existsSync(cacheDir)) return undefined
  const candidates = readdirSync(cacheDir).filter((name) => /^chromium-\d+$/.test(name))
  for (const dir of candidates) {
    for (const relativeParts of FULL_CHROMIUM_RELATIVE_PATHS) {
      const exe = path.join(cacheDir, dir, ...relativeParts)
      if (existsSync(exe)) return exe
    }
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
  if (!fullChromiumPath) {
    throw new Error(
      'Full Chromium build not found in the Playwright cache. Run `npx playwright install chromium` ' +
        '(not just the headless-shell variant) — using the shell instead produces non-deterministic ' +
        'output and will cause the CI drift check to fail.',
    )
  }
  const browser = await chromium.launch({ executablePath: fullChromiumPath })
  const page = await browser.newPage()

  for (const route of ROUTES) {
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' })

    // framer-motion keeps rewriting inline style="opacity:...; transform:..."
    // on every animation frame during entrance animations (mount fade-ins,
    // up to ~1.3s with stagger). `networkidle` doesn't wait for this, so
    // capturing immediately races a live animation loop — stripping styles
    // once isn't enough, since the next frame just reapplies them before
    // `page.content()` runs. Wait long enough for every entrance animation
    // in this codebase to have settled before touching anything.
    await page.waitForTimeout(2000)

    // The goal here is text/structure crawlability for AI bots, not
    // pixel-perfect visuals, so strip any (now-settled) inline styles rather
    // than depend on their exact final values. Also drop #app-preloader:
    // it's a sibling overlay (not a wrapper around the real content), serves
    // no purpose in a static snapshot, and main.tsx's rAF-based removal of
    // it doesn't reliably run in headless Chromium anyway.
    await page.evaluate(() => {
      document.getElementById('app-preloader')?.remove()
      document.querySelectorAll('[style]').forEach((el) => el.removeAttribute('style'))
    })

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
