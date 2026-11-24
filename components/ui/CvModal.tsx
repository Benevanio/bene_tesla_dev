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
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) setRender(true)
  }, [open])

  useEffect(() => {
    if (!render) return
    const overlay = overlayRef.current
    const panel = panelRef.current
    if (!overlay || !panel) return

    if (open) {
      closeRef.current?.focus()
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
    <div ref={overlayRef} onClick={onClose} className="cv-overlay" role="dialog" aria-modal="true" aria-labelledby="cv-titulo">
      <div ref={panelRef} onClick={e => e.stopPropagation()} className="cv-panel">
        <div className="cv-panel__head">
          <div>
            <span className="k-mono">ANEXO · CURRÍCULOS</span>
            <h2 id="cv-titulo" className="cv-panel__t">Currículos por especialidade</h2>
            <p className="formacao__s" style={{ marginTop: 6 }}>Escolha a trilha para download em PT-BR.</p>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar" className="cv-panel__close">
            <X size={20} />
          </button>
        </div>
        <ul className="cv-grid">
          {cvLinks.map(cv => (
            <li key={cv.title}>
              <a href={cv.url} target="_blank" rel="noopener noreferrer" className="cv-item">
                <span className="cv-item__t">
                  {cv.title}
                  <ExternalLink size={14} aria-hidden="true" />
                </span>
                <span className="cv-item__d">{cv.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
