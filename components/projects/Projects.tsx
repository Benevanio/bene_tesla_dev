'use client'

import { useState } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'
import { motion } from 'framer-motion'

const typeColors: Record<string, string> = {
  'Back-End': 'var(--sertao)',
  'Full Stack': 'var(--primary)',
  'Integrações': 'var(--accent-bright)',
  'Observabilidade': '#7c9cbf',
}

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" aria-label="Projetos técnicos" style={{ padding: '6rem 1.5rem', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Projetos</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Projetos técnicos
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: 500 }}>
              Engenharia aplicada com foco em arquitetura, integrações e performance.
            </p>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {projects.map((proj, i) => (
            <AnimateIn key={proj.name} delay={i * 0.07}>
              <motion.div
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-elevated)',
                  border: `1px solid ${hovered === i ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: 14,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  boxShadow: hovered === i ? '0 0 30px var(--glow)' : 'none',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: typeColors[proj.type] ?? 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{proj.type}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', marginLeft: '0.5rem' }}>· {proj.arch}</span>
                  </div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${proj.name} no GitHub`}
                    style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <GitBranch size={16} />
                  </a>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem' }}>{proj.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{proj.description}</p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {proj.tech.map(t => (
                    <span key={t} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 5, color: 'var(--text-subtle)', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>

                <a href={proj.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', transition: 'gap 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.gap = '0.6rem')}
                  onMouseLeave={e => (e.currentTarget.style.gap = '0.35rem')}
                >
                  Ver no GitHub <ExternalLink size={13} />
                </a>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
