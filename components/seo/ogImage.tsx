import { ImageResponse } from 'next/og'
import { personal } from '@/data/portfolio'

export const ogSize = { width: 1200, height: 630 }

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0a0f1a',
          color: '#f1f5f9',
        }}
      >
        <div style={{ fontSize: 30, color: '#c8a97e', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
          Portfólio
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 24 }}>{personal.name}</div>
        <div style={{ fontSize: 40, color: '#c8a97e', marginTop: 16 }}>{personal.role}</div>
        <div style={{ fontSize: 28, color: '#94a3b8', marginTop: 32 }}>
          Rust · Tauri · Node.js · Java · React · MuleSoft
        </div>
      </div>
    ),
    ogSize,
  )
}
