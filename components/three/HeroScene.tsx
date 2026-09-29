'use client'

import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { reduceMotion } from '../ui/motion'

const COLUMNS = [
  { x: 220, ys: [170, 350, 520] },
  { x: 600, ys: [130, 300, 440, 560] },
  { x: 980, ys: [210, 390, 540] },
]

type Dot = { x: number; y: number; accent: boolean }
type Link = { x1: number; y1: number; x2: number; y2: number; len: number; accent: boolean }

function buildGraph() {
  const dots: Dot[] = []
  COLUMNS.forEach((col, ci) =>
    col.ys.forEach(y => dots.push({ x: col.x, y, accent: ci === 1 }))
  )

  const links: Link[] = []
  for (let ci = 0; ci < COLUMNS.length - 1; ci++) {
    const a = COLUMNS[ci]
    const b = COLUMNS[ci + 1]
    a.ys.forEach(y1 =>
      b.ys.forEach(y2 => {
        if (Math.abs(y1 - y2) < 195) {
          const len = Math.hypot(b.x - a.x, y2 - y1)
          links.push({ x1: a.x, y1, x2: b.x, y2, len, accent: ci === 1 })
        }
      })
    )
  }
  return { dots, links }
}

export function HeroScene() {
  const svgRef = useRef<SVGSVGElement>(null)
  const graphRef = useRef(buildGraph())

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const lines = svg.querySelectorAll<SVGLineElement>('line')
    const dots = svg.querySelectorAll<SVGCircleElement>('circle')
    const group = svg.querySelector<SVGGElement>('g')

    if (reduceMotion()) {
      lines.forEach(l => { l.style.strokeDashoffset = '0'; l.style.opacity = '0.4' })
      dots.forEach(d => { d.setAttribute('r', '5'); d.style.opacity = '0.85' })
      return
    }

    animate(lines, {
      strokeDashoffset: 0,
      opacity: [0, 0.42],
      duration: 900,
      delay: stagger(45),
      ease: 'out(3)',
    })

    animate(dots, {
      r: [0, 5],
      opacity: [0, 0.9],
      duration: 620,
      delay: stagger(40, { start: 260 }),
      ease: 'out(3)',
    })

    if (group) {
      animate(group, {
        translateY: [0, -8],
        duration: 5200,
        ease: 'inOut(2)',
        loop: true,
        alternate: true,
      })
    }
  }, [])

  const { dots, links } = graphRef.current

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0 }}
      >
        <g>
          {links.map((l, i) => (
            <line
              key={`l-${i}`}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={l.accent ? 'var(--accent-bright)' : 'var(--primary)'}
              strokeWidth={1}
              style={{ strokeDasharray: l.len, strokeDashoffset: l.len, opacity: 0 }}
            />
          ))}
          {dots.map((d, i) => (
            <circle
              key={`d-${i}`}
              cx={d.x}
              cy={d.y}
              r={0}
              fill={d.accent ? 'var(--accent-bright)' : 'var(--primary-light)'}
              style={{ opacity: 0 }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
