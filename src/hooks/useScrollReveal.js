import { useEffect } from 'react'
import { waitForImage, waitForVisiblePage } from '../utils/animationReady.js'

// Observe each reveal once, without measuring every element on every scroll.
export default function useScrollReveal(deps = [], rootMargin = '0px', selector = '[data-reveal]', threshold = 0) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || typeof window.IntersectionObserver !== 'function') {
      elements.forEach((element) => { element.dataset.revealed = 'true' })
      return
    }
    const controller = new AbortController()
    const visible = new Set()
    const pending = new Set()
    const frames = new Set()
    function afterPaint(callback) {
      const frame = requestAnimationFrame(() => {
        frames.delete(frame)
        const next = requestAnimationFrame(() => {
          frames.delete(next)
          if (!controller.signal.aborted) callback()
        })
        frames.add(next)
      })
      frames.add(frame)
    }
    function reveal(target) {
      if (target.dataset.revealed === 'true' || pending.has(target)) return
      pending.add(target)
      const images = (target.matches('img') ? [target]
        : target.textContent.trim() ? [] : [...target.querySelectorAll('img')]).filter(image => {
        const bounds = image.getBoundingClientRect()
        return bounds.width > 0 && bounds.height > 0
          && bounds.bottom > 0 && bounds.top < window.innerHeight
          && bounds.right > 0 && bounds.left < window.innerWidth
          && getComputedStyle(image).visibility !== 'hidden'
      })
      Promise.all([
        waitForVisiblePage(controller.signal),
        ...images.map(image => waitForImage(image, controller.signal)),
      ]).then(() => {
        if (controller.signal.aborted) return
        afterPaint(() => {
          pending.delete(target)
          if (!visible.has(target) || document.hidden || !target.isConnected) return
          const bounds = target.getBoundingClientRect()
          if (!bounds.width || !bounds.height || bounds.bottom <= 0 || bounds.top >= window.innerHeight) return
          target.dataset.revealed = 'true'
          observer.unobserve(target)
        })
      })
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          visible.add(target)
          reveal(target)
        } else visible.delete(target)
      })
    }, { rootMargin, threshold })
    function onVisibilityChange() {
      if (!document.hidden) visible.forEach(reveal)
    }
    function onMotionChange() {
      if (!motion.matches) return
      controller.abort()
      observer.disconnect()
      frames.forEach(cancelAnimationFrame)
      elements.forEach((element) => { element.dataset.revealed = 'true' })
    }
    elements.forEach((element) => {
      if (element.dataset.revealed !== 'true') observer.observe(element)
    })
    document.addEventListener('visibilitychange', onVisibilityChange)
    motion.addEventListener('change', onMotionChange)
    return () => {
      controller.abort()
      observer.disconnect()
      frames.forEach(cancelAnimationFrame)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      motion.removeEventListener('change', onMotionChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootMargin, selector, threshold, ...deps])
}
