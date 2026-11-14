'use client'

import { techStack } from '@/data/portfolio';
import { AnimateIn } from '../ui/AnimateIn';
import { TechIcon } from '../ui/TechIcon';

const GROUPS: { label: string; cats: string[]; color: string }[] = [
  { label: 'Integração & APIs', cats: ['Integração'], color: 'var(--rio)' },
  { label: 'Back-end', cats: ['Back-End', 'Linguagem'], color: 'var(--primary)' },
  { label: 'Front-end, Mobile & Desktop', cats: ['Front-End', 'Desktop'], color: 'var(--accent-bright)' },
  { label: 'Dados', cats: ['Banco'], color: '#bf9b7c' },
  { label: 'Observabilidade, DevOps & Sustentação', cats: ['Observabilidade', 'DevOps'], color: '#7cb88f' },
  { label: 'Qualidade & Testes', cats: ['Testes', 'Qualidade'], color: '#9bbf7c' },
]

export function Technologies() {
  return (
    <section id="technologies" aria-label="Tecnologias" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
              Stack Técnica
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Ferramentas & Tecnologias
            </h2>
            <p style={{ maxWidth: 640, margin: '0.9rem auto 0', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              Do backend e das integrações corporativas ao produto full-stack — web, desktop e mobile — com observabilidade e qualidade de ponta a ponta.
            </p>
          </div>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            alignItems: 'start',
          }}
        >
          {GROUPS.map((group, gi) => {
            const items = techStack.filter(t => group.cats.includes(t.category))
            if (items.length === 0) return null
            return (
              <AnimateIn key={group.label} delay={gi * 0.06}>
                <div
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 14,
                    padding: '1.5rem',
                    height: '100%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: group.color, flexShrink: 0 }} />
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {group.label}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {items.map(t => (
                      <span
                        key={t.name}
                        className="tech-chip"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          padding: '0.4rem 0.75rem',
                          background: 'var(--bg)',
                          border: '1px solid var(--border)',
                          borderRadius: 8,
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--text)',
                          lineHeight: 1,
                          transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                        }}
                      >
                        {t.slug ? (
                          <span data-icon style={{ display: 'flex', color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                            <TechIcon slug={t.slug} size={16} />
                          </span>
                        ) : null}
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>

      <style>{`
        .tech-chip:hover {
          border-color: var(--primary) !important;
          color: var(--primary) !important;
          transform: translateY(-2px);
        }
        .tech-chip:hover [data-icon] { color: var(--primary) !important; }
      `}</style>
    </section>
  )
}
