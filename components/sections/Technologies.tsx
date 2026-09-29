'use client'

import { techStack } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'
import { TechIcon } from '../ui/TechIcon'
import { lift, pop } from '../ui/motion'

const categoryColors: Record<string, string> = {
  'Desktop': 'var(--sertao)',
  'Back-End': 'var(--primary)',
  'Front-End': 'var(--accent-bright)',
  'Linguagem': '#9b8fbf',
  'DevOps': '#7cb88f',
  'Integração': 'var(--rio)',
  'Banco': '#bf9b7c',
  'Observabilidade': '#bfb07c',
  'Testes': '#9bbf7c',
  'Qualidade': '#bf8f9b',
}

export function Technologies() {
  return (
    <section id="technologies" aria-label="Tecnologias" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Stack Técnica</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Tecnologias que domino
            </h2>
          </div>
        </AnimateIn>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {techStack.map((t, i) => {
            const color = categoryColors[t.category] ?? 'var(--primary)'
            return (
              <AnimateIn key={t.name} delay={i * 0.03}>
                <div
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = color
                    const icon = e.currentTarget.querySelector('[data-icon]') as HTMLElement | null
                    if (icon) icon.style.color = color
                    lift(e.currentTarget, true, { y: -4, scale: 1.05 })
                    pop(icon, true, 1.15)
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${color}30`
                    const icon = e.currentTarget.querySelector('[data-icon]') as HTMLElement | null
                    if (icon) icon.style.color = 'var(--text-muted)'
                    lift(e.currentTarget, false, { y: -4, scale: 1.05 })
                    pop(icon, false, 1.15)
                  }}
                  style={{
                    padding: '0.6rem 1.1rem',
                    background: 'var(--bg-surface)',
                    border: `1px solid ${color}30`,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    cursor: 'default',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <span data-icon style={{ display: 'flex', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                    <TechIcon slug={t.slug} size={18} />
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{t.name}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>{t.category}</span>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
