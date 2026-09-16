'use client'
import { AnimateIn } from '../ui/AnimateIn'
import { metrics } from '@/data/portfolio'

export function Results() {
  return (
    <section id="results" aria-label="Resultados chave" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Resultados Chave</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Impacto mensurável em<br />operações digitais da Natura
            </h2>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {metrics.map((m, i) => (
            <AnimateIn key={m.label} delay={i * 0.1}>
              <div
                style={{
                  padding: '2rem 1.5rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  textAlign: 'center',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--primary)'; el.style.boxShadow = '0 0 30px var(--glow)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.boxShadow = 'none' }}
              >
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' }}>{m.value}</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>{m.label}</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{m.detail}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
