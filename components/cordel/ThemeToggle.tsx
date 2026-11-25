'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export type Tema = 'claro' | 'noite'

export const TEMA_KEY = 'tema'
const THEME_COLOR: Record<Tema, string> = { claro: '#F3E9D2', noite: '#0C162D' }

/**
 * Roda no <head>, antes da primeira pintura: aplica o tema salvo
 * (ou o do sistema) para evitar o "flash" do tema errado.
 */
export const temaInitScript = `(function(){try{var t=localStorage.getItem('${TEMA_KEY}');if(t!=='claro'&&t!=='noite'){t=matchMedia('(prefers-color-scheme: dark)').matches?'noite':'claro'}document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='noite'?'${THEME_COLOR.noite}':'${THEME_COLOR.claro}')}catch(e){}})()`

let transicaoTimer: ReturnType<typeof setTimeout> | undefined

function aplicarTema(tema: Tema) {
  const html = document.documentElement
  html.classList.add('tema-transicao')
  clearTimeout(transicaoTimer)
  transicaoTimer = setTimeout(() => html.classList.remove('tema-transicao'), 350)
  html.dataset.theme = tema
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[tema])
}

/** Alternar Tema — sol (claro) / lua (Noite no Sertão). */
export function ThemeToggle() {
  const [tema, setTema] = useState<Tema | null>(null)

  useEffect(() => {
    setTema(document.documentElement.dataset.theme === 'noite' ? 'noite' : 'claro')

    // Sem escolha salva, acompanha o tema do sistema.
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      let salvo: string | null = null
      try { salvo = localStorage.getItem(TEMA_KEY) } catch {}
      if (salvo) return
      const novo: Tema = mq.matches ? 'noite' : 'claro'
      aplicarTema(novo)
      setTema(novo)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const escolher = (novo: Tema) => {
    aplicarTema(novo)
    setTema(novo)
    try { localStorage.setItem(TEMA_KEY, novo) } catch {}
  }

  return (
    <div className="tema" role="group" aria-label="Tema de cores">
      <button
        type="button"
        className="tema__opt tema__opt--sol"
        aria-label="Tema claro"
        aria-pressed={tema === null ? undefined : tema === 'claro'}
        onClick={() => escolher('claro')}
      >
        <Sun size={17} aria-hidden="true" />
      </button>
      <button
        type="button"
        className="tema__opt tema__opt--lua"
        aria-label="Tema Noite no Sertão"
        aria-pressed={tema === null ? undefined : tema === 'noite'}
        onClick={() => escolher('noite')}
      >
        <MoonStar size={17} aria-hidden="true" />
      </button>
    </div>
  )
}
