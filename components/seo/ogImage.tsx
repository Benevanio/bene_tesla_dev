import { ImageResponse } from 'next/og'
import { personal } from '@/data/portfolio'

export const ogSize = { width: 1200, height: 630 }

export function renderOgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#F3E9D2', color: '#242019', borderTop: '14px solid #242019', borderBottom: '14px solid #242019' }}>
        <div style={{ fontSize: 24, color: '#B65332', fontWeight: 700, letterSpacing: 4 }}>FOLHETO Nº 01 · CORDEL DIGITAL</div>
        <div style={{ fontSize: 40, color: '#B65332', fontStyle: 'italic', marginTop: 28 }}>Do sertão ao código.</div>
        <div style={{ fontSize: 110, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>{personal.name}</div>
        <div style={{ display: 'flex', fontSize: 34, marginTop: 32, paddingTop: 20, paddingBottom: 20, borderTop: '3px solid #242019', borderBottom: '3px solid #242019' }}>
          Engenheiro de Software · Backend &amp; Integrações
        </div>
        <div style={{ fontSize: 26, color: '#4A4136', marginTop: 28 }}>MuleSoft · Java · Node.js · TypeScript · React · Rust/Tauri</div>
      </div>
    ),
    ogSize,
  )
}
