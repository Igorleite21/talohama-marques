import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Metrics } from './sections/Metrics'
import { About } from './sections/About'
import { Journey } from './sections/Journey'
import { ItauJourney } from './sections/ItauJourney'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Leadership } from './sections/Leadership'
import { Skills } from './sections/Skills'
import { Insights } from './sections/Insights'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Metrics />
        <About />
        <Journey />
        <ItauJourney />
        <Education />
        <Certifications />
        <Leadership />
        <Skills />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
