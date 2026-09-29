'use client'

import { useEffect, useRef, useState } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { cvLinks } from '@/data/portfolio'
import { animate } from 'animejs'
import { reduceMotion } from './motion'

interface Props {
  open: boolean
  onClose: () => void
}

export function CvModal({ open, onClose }: Props) {
  const [render, setRender] = useState(open)
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) setRender(true)
  }, [open])

  useEffect(() => {
    if (!render) return
    const overlay = overlayRef.current
    const panel = panelRef.current
    if (!overlay || !panel) return

    if (open) {
      if (reduceMotion()) {
        overlay.style.opacity = '1'
        panel.style.opacity = '1'
        panel.style.transform = 'none'
        return
      }
      animate(overlay, { opacity: [0, 1], duration: 200, ease: 'out(2)' })
      animate(panel, { opacity: [0, 1], scale: [0.94, 1], translateY: [12, 0], duration: 300, ease: 'out(3)' })
    } else {
      if (reduceMotion()) { setRender(false); return }
      animate(overlay, { opacity: [1, 0], duration: 180, ease: 'out(2)' })
      animate(panel, { opacity: [1, 0], scale: [1, 0.96], duration: 180, ease: 'out(2)', onComplete: () => setRender(false) })
    }
  }, [open, render])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (render) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [render, onClose])

  if (!render) return null

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', opacity: 0 }}
      role="dialog" aria-modal="true" aria-label="Currículos por especialidade"
    >
      <div
        ref={panelRef}
        onClick={e => e.stopPropagation()}
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', maxWidth: 640, width: '100%', maxHeight: '85vh', overflowY: 'auto', opacity: 0 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text)', fontWeight: 700 }}>Currículos por Especialidade</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Escolha a trilha para download em PT-BR.</p>
          </div>
          <button onClick={onClose} aria-label="Fechar" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '4px' }}>
            <X size={20} />
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }}>
          {cvLinks.map(cv => (
            <a key={cv.title} href={cv.url} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block', padding: '1rem', borderRadius: 10, border: '1px solid var(--border)',
                textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s',
                background: 'var(--bg-elevated)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLElement).style.background = 'var(--glow)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--bg-elevated)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: '0.4rem' }}>{cv.title}</h3>
                <ExternalLink size={14} style={{ color: 'var(--primary)', flexShrink: 0, marginLeft: '0.5rem', marginTop: '2px' }} />
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cv.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
