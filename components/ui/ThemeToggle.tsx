'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(stored ?? (sys ? 'dark' : 'light'))
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
      style={{ 
        background: 'none', border: 'none', cursor: 'pointer', 
        padding: '8px', borderRadius: '8px', color: 'var(--primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.2s',
      }}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
