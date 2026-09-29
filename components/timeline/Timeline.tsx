'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { Briefcase, GraduationCap } from 'lucide-react'
import { timeline } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'
import { lift, pop, reduceMotion } from '../ui/motion'

export function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    if (reduceMotion()) { el.style.transform = 'scaleY(1)'; return }
    el.style.transform = 'scaleY(0)'
    const io = new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting) return
      obs.unobserve(el)
      animate(el, { scaleY: [0, 1], duration: 1100, ease: 'out(3)' })
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="career" aria-label="Trajetória profissional" style={{ padding: '6rem 1.5rem', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Trajetória Profissional</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Linha do tempo técnica
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: 500 }}>
              Evolução técnica e impacto de negócio em cada etapa.
            </p>
          </div>
        </AnimateIn>

        <div style={{ position: 'relative' }}>
          <div ref={lineRef} style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--primary), var(--accent), var(--border))', zIndex: 0, transformOrigin: 'top', transform: 'scaleY(0)' }} aria-hidden="true" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {timeline.map((item, i) => (
              <AnimateIn key={i} delay={i * 0.1} direction="left">
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', paddingLeft: '0.25rem' }}>
                  <div
                    data-timeline-icon
                    style={{
                      width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                      background: item.type === 'job' ? 'var(--sertao)20' : 'var(--accent)20',
                      border: `1px solid ${item.type === 'job' ? 'var(--sertao)' : 'var(--accent)'}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'relative', zIndex: 1,
                    }}>
                    {item.type === 'job'
                      ? <Briefcase size={20} style={{ color: 'var(--sertao)' }} />
                      : <GraduationCap size={20} style={{ color: 'var(--accent-bright)' }} />
                    }
                  </div>

                  <div
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--primary)'
                      lift(e.currentTarget, true, { y: 0, scale: 1.01 })
                      pop(e.currentTarget.parentElement?.querySelector('[data-timeline-icon]') as HTMLElement | null, true, 1.1)
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      lift(e.currentTarget, false, { y: 0, scale: 1.01 })
                      pop(e.currentTarget.parentElement?.querySelector('[data-timeline-icon]') as HTMLElement | null, false, 1.1)
                    }}
                    style={{
                      flex: 1, padding: '1.5rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.period}</p>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>{item.role}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-bright)', fontWeight: 600, marginBottom: '0.75rem' }}>{item.company}</p>
                    <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{item.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {item.tech.map(t => (
                        <span key={t} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'var(--bg)', border: '1px solid var(--border-light)', borderRadius: 5, color: 'var(--text-muted)', fontWeight: 600 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
