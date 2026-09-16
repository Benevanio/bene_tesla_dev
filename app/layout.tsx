import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Benevanio Santos | Engenheiro de Software',
  description: 'Engenheiro de Software Full Stack & Desktop. De Pão de Açúcar, AL para a engenharia de sistemas modernos. Especialista em Rust, Tauri, Node.js, Java, React, MuleSoft.',
  openGraph: {
    title: 'Benevanio Santos | Engenheiro de Software',
    description: 'Uma trajetória que começa no Nordeste e chega à tecnologia. Engenharia de software com Rust, Node.js, Java, React e MuleSoft.',
    type: 'website',
    locale: 'pt_BR',
  },
  keywords: ['Engenheiro de Software', 'Full Stack', 'Rust', 'Tauri', 'Node.js', 'Java', 'React', 'MuleSoft', 'TypeScript', 'Benevanio Santos'],
  robots: 'index, follow',
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
