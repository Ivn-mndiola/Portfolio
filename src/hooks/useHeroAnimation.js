import { useEffect, useState } from 'react'

// Reproduces the original staged reveal timing:
// fade-in logos @100ms, delay-1 items @300ms, delay-2 @900ms, delay-3 @1600ms
export default function useHeroAnimation() {
  const [visible, setVisible] = useState({
    fade: false,
    delay1: false,
    delay2: false,
    delay3: false,
  })

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisible((v) => ({ ...v, fade: true })), 100),
      setTimeout(() => setVisible((v) => ({ ...v, delay1: true })), 300),
      setTimeout(() => setVisible((v) => ({ ...v, delay2: true })), 900),
      setTimeout(() => setVisible((v) => ({ ...v, delay3: true })), 1600),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return visible
}
