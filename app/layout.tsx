import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--font-fraunces' })
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-jetbrains' })

export const viewport: Viewport = { themeColor: '#F3E9D2' }

const SITE_URL = 'https://bene-tesla-dev.com.br'
const TITLE = 'Benevanio Santos | Engenheiro de Software · Backend & Integrações'
const DESCRIPTION = 'Engenheiro de Software focado em backend e integrações corporativas: MuleSoft, Java, Spring Boot, Node.js e TypeScript — sistemas distribuídos, mensageria e observabilidade, com atuação Full Stack (React) e Desktop (Rust/Tauri).'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: 'Backend e integrações corporativas com MuleSoft, Java/Spring Boot, Node.js e TypeScript — sistemas distribuídos, mensageria e observabilidade. Full Stack (React) e Desktop (Rust/Tauri).',
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
  keywords: ['Engenheiro de Software', 'Software Engineer', 'Backend', 'Integrações Corporativas', 'Enterprise Integration', 'MuleSoft', 'DataWeave', 'API-Led Connectivity', 'Java', 'Spring Boot', 'Node.js', 'TypeScript', 'NestJS', 'Sistemas Distribuídos', 'Mensageria', 'ActiveMQ', 'Observabilidade', 'React', 'Rust', 'Tauri', 'Full Stack', 'Benevanio Santos'],
  authors: [{ name: 'Benevanio Santos', url: SITE_URL + '/' }],
  robots: { index: true, follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main" className="skip-link">Ir para o conteúdo principal</a>
        {children}
      </body>
    </html>
  )
}
