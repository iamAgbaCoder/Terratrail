import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Fade out and remove the static preloader once the app has painted.
function hidePreloader() {
  const preloader = document.getElementById('app-preloader')
  if (!preloader) return
  preloader.classList.add('is-hidden')
  preloader.addEventListener('transitionend', () => preloader.remove(), { once: true })
  // Safety net in case the transitionend event never fires.
  window.setTimeout(() => preloader.remove(), 800)
}

requestAnimationFrame(() => requestAnimationFrame(hidePreloader))
