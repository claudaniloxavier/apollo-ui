import { useEffect, useState, RefObject, CSSProperties } from 'react'

// HOOKS
import useDebounce from './useDebounce'

// ANIMATIONS
import '../theme/animations/_ripple.scss'

const useRipple = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [ripples, setRipples] = useState<CSSProperties[]>([])

  useEffect(() => {
    if (ref.current && typeof window !== 'undefined') {
      const element = ref.current

      const clickHandler = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const left = e.clientX - rect.left
        const top = e.clientY - rect.top

        const height = element.clientHeight
        const width = element.clientWidth
        const diameter = Math.max(width, height)

        setRipples([
          ...ripples,
          {
            top: top - diameter / 2,
            left: left - diameter /2,
            height: Math.max(width, height),
            width: Math.max(width, height)
          }
        ])
      }

      element.addEventListener('click', clickHandler)

      return () => {
        element.removeEventListener('click', clickHandler)
      }
    }
  }, [ref, ripples])

  const debounced = useDebounce(ripples, 1000)
  useEffect(() => {
    if (debounced.length) {
      setRipples([])
    }
  }, [debounced.length])

  return ripples.map((style, i) => {
    return (
      <span 
        key={i} 
        style={{
          ...style,
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          opacity: "25%",
          transform: "scale(0)",
          animation: "rippleAnimation 600ms linear",
          borderRadius: "50%"
        }} 
      />
    )
  })
}

export default useRipple