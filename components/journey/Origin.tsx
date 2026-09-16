'use client'
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'
import { AnimateIn } from '../ui/AnimateIn'

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
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
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
              </motion.div>

              {i < stops.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${stop.color}, ${stops[i + 1].color})`, transformOrigin: 'top', margin: '0' }}
                />
              )}
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
