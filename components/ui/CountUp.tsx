'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { animate } from 'animejs'
import { reduceMotion } from './motion'

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/)
    if (!match) {
      el.textContent = value
      return
    }

    const prefix = match[1]
    const numStr = match[2]
    const suffix = match[3]
    const target = parseFloat(numStr)
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`

    if (reduceMotion()) {
      el.textContent = value
      return
    }

    el.textContent = format(0)

    const io = new IntersectionObserver((entries, obs) => {
      const entry = entries[0]
      if (!entry.isIntersecting) return
      obs.unobserve(el)
      const state = { n: 0 }
      animate(state, {
        n: target,
        duration: 1600,
        ease: 'out(3)',
        onUpdate: () => { el.textContent = format(state.n) },
        onComplete: () => { el.textContent = value },
      })
    }, { threshold: 0.4 })

    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return <span ref={ref}>{value}</span>
}
