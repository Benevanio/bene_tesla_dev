'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#profile', label: 'Sobre' },
  { href: '#results', label: 'Resultados' },
  { href: '#career', label: 'Trajetória' },
  { href: '#architecture', label: 'Arquitetura' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(10, 15, 26, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
      role="banner"
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#intro" aria-label="Início" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--primary)', letterSpacing: '-0.03em', textDecoration: 'none' }}>
          BS
        </a>

        <nav aria-label="Principal" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >{l.label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: '8px', display: 'none' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {open && (
        <nav aria-label="Menu mobile" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
