import type { CSSProperties, ReactNode } from 'react'

const INK = '#242019'
const PAPER = '#F3E9D2'

const TEETH = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='36' height='14'><path d='M9 0L16.794 10.5H1.206Z' fill='${INK}'/><path d='M27 0L34.794 10.5H19.206Z' fill='${PAPER}'/></svg>`,
)

/** Faixa de "dentes" do cordel — ornamento barrado entre capítulos. */
export function Barrado({ bg = 'transparent', tall = false }: { bg?: string; tall?: boolean }) {
  const style: CSSProperties = { backgroundColor: bg, backgroundImage: `url("data:image/svg+xml,${TEETH}")` }
  return <div className={`barrado${tall ? ' barrado--14' : ''}`} style={style} aria-hidden="true" />
}

export function Losango({ className = '' }: { className?: string }) {
  return <span className={`losango ${className}`} aria-hidden="true" />
}

interface SectionHeadProps {
  canto: string
  secao: string
  title?: ReactNode
  sub?: ReactNode
  id?: string
}

export function SectionHead({ canto, secao, title, sub, id }: SectionHeadProps) {
  return (
    <div className="sec-head">
      <div className="kicker-row">
        <span className="kicker-row__canto">{canto}</span>
        <span className="kicker-row__linha" aria-hidden="true" />
        <span className="kicker-row__secao">{secao}</span>
      </div>
      {title && <h2 className="sec-title" id={id}>{title}</h2>}
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  )
}

export function Tags({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="tags">
      {items.map(t => (
        <li key={t} className={`tag${dark ? ' tag--dark' : ''}`}>{t}</li>
      ))}
    </ul>
  )
}

type IconProps = { size?: number; className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function GithubIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
