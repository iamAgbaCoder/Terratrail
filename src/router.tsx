import { useEffect, useState, AnchorHTMLAttributes, MouseEvent } from 'react'

/* A tiny dependency-free client router using clean History-API paths
 * (e.g. "/about", "/contact") instead of hash URLs.
 *
 * Two kinds of target are supported by navigate()/Link:
 *   • Page routes      → "/", "/about", "/privacy" …  (pushState)
 *   • In-page anchors  → "#features", "#pricing" …     (smooth-scroll on home)
 *
 * NOTE: clean paths require the host to serve index.html for unknown routes.
 * Vite dev + `vite preview` already do this (SPA fallback). For production
 * behind Caddy, add:  try_files {path} /index.html
 */

const ROUTE_EVENT = 'app:route'

// Set just before we navigate home to reach an anchor, so the route-change
// handler doesn't fight the anchor scroll by jumping to the top first.
let pendingAnchor = false

function currentPath(): string {
  const p = window.location.pathname
  return p.length > 1 ? p.replace(/\/+$/, '') : '/'
}

/** Subscribe to the active route (pathname). Re-renders on navigation. */
export function useRoute(): string {
  const [route, setRoute] = useState<string>(() => currentPath())

  useEffect(() => {
    const onChange = () => setRoute(currentPath())
    window.addEventListener('popstate', onChange)
    window.addEventListener(ROUTE_EVENT, onChange)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener(ROUTE_EVENT, onChange)
    }
  }, [])

  // Reset scroll on a real page change (skipped when an anchor scroll is queued).
  useEffect(() => {
    if (pendingAnchor) {
      pendingAnchor = false
      return
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [route])

  return route
}

function scrollToAnchor(id: string): void {
  const doScroll = () => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  if (currentPath() !== '/') {
    // Return home first, then scroll once the section has mounted.
    pendingAnchor = true
    window.history.pushState({}, '', '/')
    window.dispatchEvent(new Event(ROUTE_EVENT))
    requestAnimationFrame(() => requestAnimationFrame(doScroll))
  } else {
    doScroll()
  }
}

/** Navigate to a page route ("/about"), an in-page anchor ("#features"), or external URL. */
export function navigate(to: string): void {
  if (/^https?:\/\//.test(to) || to.startsWith('mailto:') || to.startsWith('tel:')) {
    window.location.href = to
    return
  }
  if (to.startsWith('#')) {
    scrollToAnchor(to.slice(1))
    return
  }
  const path = to.replace(/\/+$/, '') || '/'
  if (path === currentPath()) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event(ROUTE_EVENT))
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** A page route ("/about"), an in-page anchor ("#features"), or an external URL. */
  to: string
}

/** Anchor that intercepts internal navigation for SPA routing; external links pass through. */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const isExternal = /^https?:\/\//.test(to) || to.startsWith('mailto:') || to.startsWith('tel:')

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (isExternal || e.defaultPrevented) return
    // Let the browser handle modified clicks (new tab, etc.).
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
