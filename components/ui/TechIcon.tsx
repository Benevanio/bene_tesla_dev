import { techIcons } from '@/data/techIcons'

interface Props {
  slug: string
  size?: number
}

export function TechIcon({ slug, size = 18 }: Props) {
  const icon = techIcons[slug]
  if (!icon) return null

  return (
    <svg
      role="img"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}
