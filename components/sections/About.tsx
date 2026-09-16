'use client'
import { AnimateIn } from '../ui/AnimateIn'
import { personal, techStack, metrics } from '@/data/portfolio'

export function About() {
  return (
    <section id="profile" aria-label="Sobre mim" style={{ padding: '6rem 1.5rem', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Sobre mim</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '1rem' }}>
              Engenheiro de Software<br />com foco em performance
            </h2>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <AnimateIn delay={0.1}>
            <div style={{ padding: '2rem', background: 'var(--bg-elevated)', borderRadius: 16, border: '1px solid var(--border)', height: '100%' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>{personal.bio}</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>{personal.bio2}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
                {techStack.slice(0, 8).map(t => (
                  <span key={t.name} style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: 'var(--bg)', border: '1px solid var(--border-light)', borderRadius: 6, color: 'var(--primary)', fontWeight: 600 }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div style={{ padding: '2rem', background: 'var(--bg-elevated)', borderRadius: 16, border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>Indicadores Técnicos</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {metrics.map(m => (
                  <div key={m.label} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '1rem' }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{m.value}</p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)', marginTop: '0.2rem' }}>{m.label}</p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.4 }}>{m.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
