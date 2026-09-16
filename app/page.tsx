import { Nav } from '@/components/ui/Nav'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/sections/About'
import { Results } from '@/components/sections/Results'
import { Origin } from '@/components/journey/Origin'
import { Timeline } from '@/components/timeline/Timeline'
import { Architecture } from '@/components/sections/Architecture'
import { Technologies } from '@/components/sections/Technologies'
import { Projects } from '@/components/projects/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Results />
        <Origin />
        <Timeline />
        <Architecture />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
