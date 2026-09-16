'use client'
import { GitBranch, Link2, Mail } from 'lucide-react'
import { personal } from '@/data/portfolio'

export function Footer() {
  return (
    <footer role="contentinfo" style={{ padding: '2.5rem 1.5rem', background: 'var(--bg)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[
            { href: personal.linkedin, icon: <Link2 size={18} />, label: 'LinkedIn' },
            { href: personal.github, icon: <GitBranch size={18} />, label: 'GitHub' },
            { href: `mailto:${personal.email}`, icon: <Mail size={18} />, label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >{s.icon}</a>
          ))}
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
          © {new Date().getFullYear()} {personal.name}. Engenharia de software orientada a resultados.
        </p>
      </div>
    </footer>
  )
}
