'use client'

import { personal } from '@/data/portfolio';
import { Calendar, GitBranch, Link2, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { AnimateIn } from '../ui/AnimateIn';
import { CvModal } from '../ui/CvModal';

export function Contact() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <>
      <section id="contact" aria-label="Contato" style={{ padding: '6rem 1.5rem', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimateIn>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>Contato</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
                Vamos conversar
              </h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: 480, margin: '0.75rem auto 0' }}>
                Disponível para oportunidades em engenharia de software, arquitetura e integrações.
              </p>
            </div>
          </AnimateIn>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <AnimateIn delay={0.1}>
              <a href={personal.calendar} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary)', color: '#0a0f1a', padding: '0.8rem 1.5rem', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <Calendar size={16} /> Agendar conversa
              </a>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <a href={`mailto:${personal.email}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'var(--text)', padding: '0.8rem 1.5rem', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid var(--border-light)', fontFamily: 'var(--font-heading)', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}
              >
                <Mail size={16} /> Enviar email
              </a>
            </AnimateIn>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 780, margin: '0 auto' }}>
            {[
              { icon: <Link2 size={20} />, title: 'LinkedIn', desc: 'Networking e histórico profissional.', sub: 'Perfil com experiência e certificações.', url: personal.linkedin },
              { icon: <GitBranch size={20} />, title: 'GitHub', desc: 'Repositórios técnicos e experimentos.', sub: 'Código fonte e evolução contínua.', url: personal.github },
              { icon: <MessageSquare size={20} />, title: 'WhatsApp', desc: 'Contato rápido para alinhamentos.', sub: 'Retorno em horário comercial.', url: 'https://wa.me/19998283835' },
            ].map(c => (
              <AnimateIn key={c.title}>
                <a href={c.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', padding: '1.5rem', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 14, textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--primary)'; el.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)' }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--primary)20', border: '1px solid var(--primary)30', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1rem' }}>
                    {c.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.3rem' }}>{c.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{c.desc}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>{c.sub}</p>
                </a>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
              Para confirmar detalhes, envie a pauta para{' '}
              <a href={`mailto:${personal.email}`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{personal.email}</a>
            </p>
          </AnimateIn>
        </div>
      </section>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  )
}
