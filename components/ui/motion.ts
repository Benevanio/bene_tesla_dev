'use client'

import { animate } from 'animejs'

export function reduceMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

type LiftOptions = { y?: number; scale?: number; duration?: number }

export function lift(el: HTMLElement, active: boolean, opts: LiftOptions = {}) {
  if (reduceMotion()) return
  const { y = -4, scale = 1.02, duration = 260 } = opts
  animate(el, {
    translateY: active ? y : 0,
    scale: active ? scale : 1,
    duration,
    ease: 'out(3)',
  })
}

export function pop(el: HTMLElement | null, active: boolean, scale = 1.12) {
  if (!el || reduceMotion()) return
  animate(el, {
    scale: active ? scale : 1,
    duration: 260,
    ease: 'out(3)',
  })
}
