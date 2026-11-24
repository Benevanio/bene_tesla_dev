'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personal } from '@/data/portfolio'
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
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  // Seção ativa (scrollspy)
  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive('#' + visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Header compacto após rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu mobile: trava o scroll, fecha com Esc e ao voltar para desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    const mq = window.matchMedia('(min-width: 1101px)')
    const onMq = () => { if (mq.matches) setOpen(false) }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <>
      <Barrado />
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="wrap">
          <div className="site-header__inner">
            <a href="#capa" className="marca" aria-label="Benevanio Santos — voltar à capa" onClick={() => setOpen(false)}>
              <span className="marca__mono" aria-hidden="true">bs</span>
              <span className="marca__txt">
                <span className="marca__nome">Benevanio Santos</span>
                <span className="marca__sub">cordel digital · folheto nº 01</span>
              </span>
            </a>

            <nav aria-label="Principal" className="nav-desk-wrap">
              <ul className="nav-desk">
                {navLinks.map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="nav-item" aria-current={active === l.href ? 'location' : undefined}>
                      <span className="nav-item__num">{l.num}</span>
                      <span className="nav-item__label">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

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

        <nav id="menu-mobile" className="nav-mobile" aria-label="Menu" hidden={!open}>
          <div className="wrap nav-mobile__inner">
            <span className="nav-mobile__kicker">ÍNDICE DO FOLHETO</span>
            <ul className="nav-mobile__lista">
              {navLinks.map((l, i) => (
                <li key={l.href} style={{ ['--i' as string]: i }}>
                  <a href={l.href} onClick={() => setOpen(false)} aria-current={active === l.href ? 'location' : undefined}>
                    <span className="nav-item__num">{l.num}</span>
                    <span className="nav-mobile__label">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-mobile__rodape">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href={`mailto:${personal.email}`}>Email <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
