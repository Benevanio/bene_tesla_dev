import { personal } from '@/data/portfolio'
import { Nav } from '@/components/ui/Nav'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/sections/About'
import { Results } from '@/components/sections/Results'
import { Origin } from '@/components/journey/Origin'
import { Timeline } from '@/components/timeline/Timeline'
import { Architecture } from '@/components/sections/Architecture'
import { Technologies } from '@/components/sections/Technologies'
import { Talks } from '@/components/sections/Talks'
import { Projects } from '@/components/projects/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/ui/Footer'

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
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Results />
        <Origin />
        <Timeline />
        <Architecture />
        <Technologies />
        <Talks />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
