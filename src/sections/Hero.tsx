import { profile } from '../data/profile'
import { Button } from '../components/Button'
import { LinkedInGlyph } from '../components/Icons'
import { dated, toIndex } from '../lib/dates'

export function Hero() {
  const firstYear = Math.min(...dated(profile.experience).map((r) => Math.floor(toIndex(r.start) / 12)))
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__grid wrap">
        <p className="hero__eyebrow label">
          <span>{profile.location}</span>
          <span aria-hidden="true">/</span>
          <span>{profile.currentCompany}</span>
          <span aria-hidden="true">/</span>
          <span>
            {firstYear} — hoje
          </span>
        </p>

        <h1 className="hero__title" id="hero-title">
          <span className="hero__line">Talohama</span>
          <span className="hero__line hero__line--italic">Marques</span>
        </h1>

        <figure className="hero__portrait">
          {profile.photo ? (
            <img src={profile.photo} alt={`Retrato de ${profile.name}`} width={480} height={600} />
          ) : (
            <div className="hero__mono" aria-hidden="true">
              <span>t</span>
              <span>m</span>
            </div>
          )}
          <figcaption className="label">
            <span className="hero__live" aria-hidden="true" />
            Hoje · {profile.currentTitle}
          </figcaption>
        </figure>

        <div className="hero__copy">
          <p className="hero__thesis">
            Desenvolver pessoas
            <br />e evoluir produtos.
          </p>
          <p className="hero__lede">
            Líder de produtos com uma trajetória construída entre tecnologia, operações, dados e negócio. Hoje lidera a
            estratégia de migração da plataforma de cartões do Itaú Unibanco.
          </p>
          <div className="hero__ctas">
            <Button href="#trajetoria">Conheça a trajetória</Button>
            <Button href={profile.social.linkedin} variant="line" external icon={<LinkedInGlyph />}>
              LinkedIn
            </Button>
          </div>
        </div>
      </div>

      <div className="ticker" aria-label="Áreas de atuação">
        <ul className="ticker__track">
          {[0, 1].map((k) =>
            profile.headlineAreas.map((a) => (
              <li key={`${k}-${a}`} aria-hidden={k === 1 ? true : undefined}>
                {a}
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  )
}
