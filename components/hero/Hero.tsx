'use client'

import { personal } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Download, MapPin, MessageCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { CvModal } from '../ui/CvModal';

const HeroScene = dynamic(
  () => import('../three/HeroScene').then(m => ({ default: m.HeroScene })),
  { ssr: false }
)

export function Hero() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <>
      <section id="intro" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <HeroScene />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg, rgba(10,15,26,0.85) 0%, rgba(10,15,26,0.5) 60%, rgba(10,15,26,0.2) 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '6rem 1.5rem 4rem', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <MapPin size={14} style={{ color: 'var(--primary)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em', fontWeight: 600, textTransform: 'uppercase' }}>
                Pão de Açúcar, AL → Porto da Folha, SE → Engenharia de Software
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text)' }}>
              {personal.name}
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: 'var(--primary)', fontWeight: 600, fontFamily: 'var(--font-heading)', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              {personal.role}
            </p>

            <p style={{ maxWidth: 560, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              {personal.tagline}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--primary)', color: '#0a0f1a', padding: '0.75rem 1.5rem',
                borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                fontFamily: 'var(--font-heading)', transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <MessageCircle size={16} />
                Vamos conversar
              </a>
              <button onClick={() => setCvOpen(true)} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'transparent', color: 'var(--text)', padding: '0.75rem 1.5rem',
                borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                border: '1px solid var(--border-light)', fontFamily: 'var(--font-heading)', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}
              >
                <Download size={16} />
                Baixar currículos
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--primary), transparent)', margin: '0 auto' }}
          />
        </motion.div>
      </section>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  )
}
