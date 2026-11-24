import { CvController } from '@/components/cordel/Cv'
import { Header } from '@/components/cordel/Header'
import { Hero } from '@/components/cordel/Hero'
import { Barrado } from '@/components/cordel/primitives'
import { Origem, Resultados, Sobre } from '@/components/cordel/Sections1'
import { Arquitetura, Stack, Trajetoria } from '@/components/cordel/Sections2'
import { Contato, Palestras, Projetos } from '@/components/cordel/Sections3'
import { personal } from '@/data/portfolio'

const SITE_URL = 'https://bene-tesla-dev.vercel.app/'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': SITE_URL + '#person',
      name: personal.name,
      jobTitle: personal.role,
      url: SITE_URL,
      sameAs: [personal.github, personal.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': SITE_URL + '#website',
      name: `${personal.name} | Portfólio`,
      url: SITE_URL,
      inLanguage: 'pt-BR',
      author: { '@id': SITE_URL + '#person' },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Sobre />
        <Resultados />
        <Origem />
        <Trajetoria />
        <Barrado bg="var(--white)" tall />
        <Arquitetura />
        <Stack />
        <Barrado bg="var(--ink)" tall />
        <Palestras />
        <Projetos />
      </main>
      <Contato />
      <Barrado bg="var(--ink)" />
      <CvController />
    </>
  )
}
