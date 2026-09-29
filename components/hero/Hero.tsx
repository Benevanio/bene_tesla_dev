'use client'

import { personal } from '@/data/portfolio';
import { Download, MapPin, MessageCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { CvModal } from '../ui/CvModal';
import { lift, reduceMotion } from '../ui/motion';

const HeroScene = dynamic(
  () => import('../three/HeroScene').then(m => ({ default: m.HeroScene })),
  { ssr: false }
)

export function Hero() {
  const [cvOpen, setCvOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    const items = content.querySelectorAll<HTMLElement>('[data-reveal]')

    if (reduceMotion()) {
      items.forEach(i => { i.style.opacity = '1'; i.style.transform = 'none' })
      if (scrollRef.current) scrollRef.current.style.opacity = '1'
      return
    }

    animate(items, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      delay: stagger(90),
      ease: 'out(3)',
    })

    if (scrollRef.current) {
      animate(scrollRef.current, { opacity: [0, 1], duration: 600, delay: 1400, ease: 'out(2)' })
      const cue = scrollRef.current.querySelector<HTMLSpanElement>('span')
      if (cue) {
        animate(cue, {
          translateY: [0, 10],
          opacity: [1, 0.2],
          duration: 1600,
          loop: true,
          alternate: true,
          ease: 'inOut(2)',
        })
      }
    }
  }, [])

  return (
    <>
      <section id="intro" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <HeroScene />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'var(--hero-overlay)',
          pointerEvents: 'none',
        }} />

        <div ref={contentRef} style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '6rem 1.5rem 4rem', width: '100%' }}>
          <div data-reveal style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <MapPin size={14} style={{ color: 'var(--primary)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em', fontWeight: 600, textTransform: 'uppercase' }}>
              Pão de Açúcar, AL → Porto da Folha, SE → Engenharia de Software
            </span>
          </div>

          <h1 data-reveal style={{ opacity: 0, fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text)' }}>
            {personal.name}
          </h1>

          <p data-reveal style={{ opacity: 0, fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: 'var(--primary)', fontWeight: 600, fontFamily: 'var(--font-heading)', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
            {personal.role}
          </p>

          <p data-reveal style={{ opacity: 0, maxWidth: 560, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {personal.tagline}
          </p>

          <div data-reveal style={{ opacity: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--primary)', color: '#0a0f1a', padding: '0.75rem 1.5rem',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              fontFamily: 'var(--font-heading)', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; lift(e.currentTarget, true, { y: -2, scale: 1.02 }) }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; lift(e.currentTarget, false, { y: -2, scale: 1.02 }) }}
            >
              <MessageCircle size={16} />
              Vamos conversar
            </a>
            <button onClick={() => setCvOpen(true)} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: 'var(--text)', padding: '0.75rem 1.5rem',
              borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
              border: '1px solid var(--border-light)', fontFamily: 'var(--font-heading)', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; lift(e.currentTarget, true, { y: -2, scale: 1.02 }) }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; lift(e.currentTarget, false, { y: -2, scale: 1.02 }) }}
            >
              <Download size={16} />
              Baixar currículos
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, opacity: 0 }}
          aria-hidden="true"
        >
          <span style={{ display: 'block', width: 1, height: 40, background: 'linear-gradient(to bottom, var(--primary), transparent)', margin: '0 auto' }} />
        </div>
      </section>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  )
}
