import type { Metadata } from 'next'
import { Outfit, Public_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'], display: 'swap', variable: '--font-outfit' })
const publicSans = Public_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap', variable: '--font-public-sans' })

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
    <html lang="pt-BR" data-theme="dark" className={`${outfit.variable} ${publicSans.variable}`} suppressHydrationWarning>
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
