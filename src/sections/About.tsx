import { profile } from '../data/profile'
import { SectionHead } from '../components/SectionHead'

export function About() {
  return (
    <section className="about section" id="sobre" aria-labelledby="sobre-title">
      <div className="wrap about__grid">
        <SectionHead
          id="sobre"
          chapter="I"
          kicker="Quem ela é"
          title={
            <>
              Onde tecnologia, dados e negócio <em>viram produto</em>.
            </>
          }
        />
        <div className="about__body" data-reveal>
          <p className="about__drop">{profile.about[0]}</p>
          <p>{profile.about[1]}</p>
          <p>{profile.about[2]}</p>
          <p>
            Essa trajetória, nas palavras dela, ampliou a capacidade de conectar estratégia e execução, transformar
            problemas complexos em soluções simples e desenvolver times de alta performance.
          </p>
        </div>
        <aside className="about__now" data-reveal aria-label="Atuação atual">
          <p className="label">Agora</p>
          <p className="about__now-title">Migração da plataforma de cartões</p>
          <p className="about__now-text">
            Uma atuação transversal, com visão end-to-end, conectando negócio, dados, tecnologia e operação para
            grandes parceiros:
          </p>
          <ul className="about__partners">
            {profile.currentPartners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </aside>
        <blockquote className="about__quote" data-reveal>
          <p>“{profile.purpose}”</p>
          <footer className="label">Talohama Marques · propósito declarado no LinkedIn</footer>
        </blockquote>
      </div>
    </section>
  )
}
