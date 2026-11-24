'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState, type ReactNode } from 'react'

const CvModal = dynamic(() => import('../ui/CvModal').then(m => ({ default: m.CvModal })), { ssr: false })

const EVENT = 'cv:open'

/** Monta o modal de currículos uma vez na página e abre quando qualquer botão dispara o evento. */
export function CvController() {
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onOpen = () => { setLoaded(true); setOpen(true) }
    window.addEventListener(EVENT, onOpen)
    return () => window.removeEventListener(EVENT, onOpen)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return loaded ? <CvModal open={open} onClose={close} /> : null
}

export function OpenCvButton({ className, children, onClick }: { className?: string; children: ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() => { onClick?.(); window.dispatchEvent(new Event(EVENT)) }}
    >
      {children}
    </button>
  )
}
