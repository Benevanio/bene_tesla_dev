'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { MapPin } from 'lucide-react'
import { AnimateIn } from '../ui/AnimateIn'
import { lift, reduceMotion } from '../ui/motion'

const stops = [
  {
    place: 'Pão de Açúcar',
    state: 'Alagoas — AL',
    desc: 'Local de nascimento. Onde tudo começou — no coração do Sertão nordestino, às margens do Rio São Francisco.',
    color: 'var(--sertao)',
  },
  {
    place: 'Porto da Folha',
    state: 'Sergipe — SE',
    desc: 'Um novo capítulo. A cidade que fez parte da formação humana e alimentou a busca por algo maior.',
    color: 'var(--rio)',
  },
  {
    place: 'Engenharia de Software',
    state: 'A tecnologia como destino',
    desc: 'A trajetória geográfica se tornou trajetória intelectual. O Nordeste moldou o engenheiro.',
    color: 'var(--primary)',
  },
]

function Connector({ from, to }: { from: string; to: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduceMotion()) { el.style.transform = 'scaleY(1)'; return }
    el.style.transform = 'scaleY(0)'
    const io = new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting) return
      obs.unobserve(el)
      animate(el, { scaleY: [0, 1], duration: 600, delay: 150, ease: 'out(3)' })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${from}, ${to})`, transformOrigin: 'top', transform: 'scaleY(0)' }}
    />
  )
}

export function Origin() {
  return (
    <section id="origin" aria-label="Minha origem" style={{ padding: '6rem 1.5rem', maxWidth: 1280, margin: '0 auto' }}>
      <AnimateIn>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Minha Origem</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Uma trajetória moldada<br />pelo Nordeste
          </h2>
        </div>
      </AnimateIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', alignItems: 'center', position: 'relative' }}>
        {stops.map((stop, i) => (
          <AnimateIn key={stop.place} delay={i * 0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 520 }}>
              <div
                onMouseEnter={e => lift(e.currentTarget, true, { y: -2, scale: 1.02 })}
                onMouseLeave={e => lift(e.currentTarget, false, { y: -2, scale: 1.02 })}
                style={{
                  background: 'var(--bg-surface)',
                  border: `1px solid ${stop.color}40`,
                  borderRadius: 16, padding: '1.75rem',
                  width: '100%',
                  boxShadow: `0 0 40px ${stop.color}10`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${stop.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} style={{ color: stop.color }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>{stop.place}</h3>
                    <p style={{ fontSize: '0.8rem', color: stop.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{stop.state}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{stop.desc}</p>
                  </div>
                </div>
              </div>

              {i < stops.length - 1 && <Connector from={stop.color} to={stops[i + 1].color} />}
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
