import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://bene-tesla-dev.vercel.app'
const TITLE = 'Benevanio Santos | Engenheiro de Software Full Stack & Desktop'
const DESCRIPTION = 'Engenheiro de Software Full Stack & Desktop. De Pão de Açúcar, AL para a engenharia de sistemas modernos. Especialista em Rust, Tauri, Node.js, Java, React, MuleSoft.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: 'Uma trajetória que começa no Nordeste e chega à tecnologia. Engenharia de software com Rust, Node.js, Java, React e MuleSoft.',
    url: SITE_URL + '/',
    siteName: 'Benevanio Santos',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  keywords: ['Engenheiro de Software', 'Full Stack', 'Rust', 'Tauri', 'Node.js', 'Java', 'React', 'MuleSoft', 'TypeScript', 'Benevanio Santos'],
  authors: [{ name: 'Benevanio Santos', url: SITE_URL + '/' }],
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(()=>{try{const t=localStorage.getItem('theme');const s=window.matchMedia?.('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t||(s?'dark':'light'));}catch(e){document.documentElement.setAttribute('data-theme','dark');}})()`
        }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Ir para o conteúdo principal</a>
        <div className="topo-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
