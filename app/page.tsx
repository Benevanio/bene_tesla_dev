import { Hero } from '@/components/hero/Hero'
import { Origin } from '@/components/journey/Origin'
import { Projects } from '@/components/projects/Projects'
import { About } from '@/components/sections/About'
import { Architecture } from '@/components/sections/Architecture'
import { Contact } from '@/components/sections/Contact'
import { Results } from '@/components/sections/Results'
import { Talks } from '@/components/sections/Talks'
import { Technologies } from '@/components/sections/Technologies'
import { Timeline } from '@/components/timeline/Timeline'
import { Footer } from '@/components/ui/Footer'
import { Nav } from '@/components/ui/Nav'
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
