import { useEffect, useRef, useState } from 'react'

// Cycles through roster face indices every 2500ms while `active` is true.
export default function useRosterCycle(count, active) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!active || count === 0) {
      clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 2500)
    return () => clearInterval(timerRef.current)
  }, [active, count])

  return index
}
