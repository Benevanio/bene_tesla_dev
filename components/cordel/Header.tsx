'use client'

import { FileDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { OpenCvButton } from './Cv'
import { Barrado } from './primitives'

export const navLinks = [
  { href: '#sobre', num: 'I.', label: 'Sobre' },
  { href: '#resultados', num: 'II.', label: 'Resultados' },
  { href: '#origem', num: 'III.', label: 'Origem' },
  { href: '#trajetoria', num: 'IV.', label: 'Trajetória' },
  { href: '#arquitetura', num: 'V.', label: 'Arquitetura' },
  { href: '#palestras', num: 'VI.', label: 'Palestras' },
  { href: '#projetos', num: 'VII.', label: 'Projetos' },
  { href: '#contato', num: 'VIII.', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#sobre')

  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive('#' + visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <Barrado />
      <header className="site-header">
        <div className="wrap">
          <div className="site-header__inner">
            <a href="#capa" className="marca" aria-label="Benevanio Santos — voltar à capa">
              <span className="marca__mono" aria-hidden="true">bs</span>
              <span className="marca__txt">
                <span className="marca__nome">Benevanio Santos</span>
                <span className="marca__sub">cordel digital · folheto nº 01</span>
              </span>
            </a>

            <nav aria-label="Principal">
              <ul className="nav-desk">
                {navLinks.map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="nav-item" aria-current={active === l.href ? 'true' : undefined}>
                      <span className="nav-item__num">{l.num}</span>
                      <span className="nav-item__label">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <OpenCvButton className="cta-cv cta-cv--desk">
              <FileDown size={16} aria-hidden="true" />
              Currículo
            </OpenCvButton>

            <button
              type="button"
              className="menu-btn"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls="menu-mobile"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-mobile" className="nav-mobile" aria-label="Menu">
            <ul>
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    <span className="nav-item__num">{l.num}</span>
                    <span className="nav-item__label">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <OpenCvButton className="cta-cv" onClick={() => setOpen(false)}>
              <FileDown size={16} aria-hidden="true" />
              Currículo
            </OpenCvButton>
          </nav>
        )}
      </header>
    </>
  )
}
