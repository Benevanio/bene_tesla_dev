'use client'
import { Layers, Zap, Code, Box, Network } from 'lucide-react'
import { principles } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={22} />,
  zap: <Zap size={22} />,
  code: <Code size={22} />,
  box: <Box size={22} />,
  network: <Network size={22} />,
}

export function Architecture() {
  return (
    <section id="architecture" aria-label="Princípios de arquitetura" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Princípios de Arquitetura</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
              Decisões técnicas orientadas<br />à escalabilidade
            </h2>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {principles.map((p, i) => (
            <AnimateIn key={p.name} delay={i * 0.1}>
              <div
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  height: '100%',
                  transition: 'border-color 0.25s, transform 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--primary)'; el.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--primary)20', border: '1px solid var(--primary)30', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1rem' }}>
                  {iconMap[p.icon]}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
