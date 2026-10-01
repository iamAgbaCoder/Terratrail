import { useEffect } from 'react'

/** Sets the document title and meta description for the current route.
 *  Dependency-free (matches this project's router), since this is a
 *  client-side-rendered SPA with no server-side rendering: this only
 *  updates what a JS-executing crawler/browser sees, not the static
 *  HTML response, so it complements but doesn't replace index.html's
 *  default tags (which remain what non-JS crawlers and link previews see). */
export function useDocumentMeta(title: string, description: string): void {
  useEffect(() => {
    document.title = title

    const meta = document.querySelector('meta[name="description"]')
    const previous = meta?.getAttribute('content') ?? null
    meta?.setAttribute('content', description)

    return () => {
      if (previous !== null) meta?.setAttribute('content', previous)
    }
  }, [title, description])
}
