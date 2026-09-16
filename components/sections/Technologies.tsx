'use client'

import { techStack } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'
import { motion } from 'framer-motion'

const categoryColors: Record<string, string> = {
  'Desktop': 'var(--sertao)',
  'Back-End': 'var(--primary)',
  'Front-End': 'var(--accent-bright)',
  'Linguagem': '#9b8fbf',
  'DevOps': '#7cb88f',
  'Integração': 'var(--rio)',
  'Banco': '#bf9b7c',
  'Mensageria': '#7c9cbf',
  'Segurança': '#bf7c8f',
  'Governança': '#8fbf7c',
  'Observabilidade': '#bfb07c',
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
          {techStack.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '0.6rem 1.1rem',
                  background: 'var(--bg-surface)',
                  border: `1px solid ${categoryColors[t.category] ?? 'var(--border)'}30`,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'default',
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: categoryColors[t.category] ?? 'var(--primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{t.name}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>{t.category}</span>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
