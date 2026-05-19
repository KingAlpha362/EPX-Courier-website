import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from '@studio-freight/lenis'
import './index.css'
import App from './App.jsx'

// Disable smooth scroll on touch/mobile devices for native performance
const isTouchOrMobile = typeof window !== 'undefined' && 
  (window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0);

if (!isTouchOrMobile) {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
