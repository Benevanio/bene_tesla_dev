'use client'

import { ExternalLink, Image as ImageIcon, Play } from 'lucide-react'
import { talks } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'

export function Talks() {
  return (
    <section id="talks" aria-label="Palestras" style={{ padding: '6rem 1.5rem', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Comunidade</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Palestras
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: 560 }}>
              Compartilhando conhecimento sobre MuleSoft, APIs e integrações com comunidades de tecnologia.
            </p>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
          {talks.map((talk, i) => {
            const PlatformIcon = talk.platform === 'YouTube' ? Play : ImageIcon

            return (
              <AnimateIn key={talk.event} delay={i * 0.07}>
                <article
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--primary)'
                    e.currentTarget.style.boxShadow = '0 0 30px var(--glow)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  style={{
                    padding: '1.5rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: 14,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {talk.event}
                    </span>
                    <PlatformIcon size={18} aria-hidden="true" style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  </div>

                  <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', marginBottom: '0.6rem' }}>{talk.location}</p>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>
                    {talk.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65, flex: 1, marginBottom: '1.25rem' }}>
                    {talk.description}
                  </p>

                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${talk.platform} de ${talk.event}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {talk.platform === 'YouTube' ? 'Assistir palestra' : 'Ver publicação'} <ExternalLink size={13} />
                  </a>
                </article>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
