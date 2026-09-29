'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { reduceMotion } from './motion'

interface Props {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export function AnimateIn({ children, delay = 0, direction = 'up', className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduceMotion()) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const tx = direction === 'left' ? -24 : direction === 'right' ? 24 : 0
    const ty = direction === 'up' ? 32 : 0
    el.style.opacity = '0'
    el.style.transform = `translate(${tx}px, ${ty}px)`

    const io = new IntersectionObserver((entries, obs) => {
      const entry = entries[0]
      if (!entry.isIntersecting) return
      obs.unobserve(el)
      el.style.willChange = 'opacity, transform'
      animate(el, {
        opacity: [0, 1],
        translateX: [tx, 0],
        translateY: [ty, 0],
        duration: 650,
        delay: delay * 1000,
        ease: 'out(3)',
        onComplete: () => { el.style.willChange = 'auto' },
      })
    }, { rootMargin: '0px 0px -80px', threshold: 0.01 })

    io.observe(el)
    return () => io.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
