import { profile } from '../data/profile'
import { SectionHead } from '../components/SectionHead'
import { Button } from '../components/Button'
import { ArrowUpRight } from '../components/Icons'

export function Insights() {
  const posts = profile.insights.filter((p) => p.status === 'confirmado')
  return (
    <section className="insights section" id="insights" aria-labelledby="insights-title">
      <div className="wrap">
        <SectionHead
          id="insights"
          chapter="VI"
          kicker="O que pensa"
          title={
            <>
              Insights e <em>notas de carreira</em>.
            </>
          }
          lede="Publicações do LinkedIn, com resumo e link para o original."
        />
        <div className="insights__grid">
          {posts.map((p) => (
            <article className="post" key={p.title} data-reveal>
              <p className="post__meta label">
                <span className="post__cat">{p.category}</span>
                <span>{p.date}</span>
              </p>
              <h3 className="post__title">{p.title}</h3>
              <p className="post__summary">{p.summary}</p>
              <a className="post__link" href={p.url} target="_blank" rel="noopener noreferrer">
                Ler no LinkedIn <ArrowUpRight size={14} />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </article>
          ))}
          <div className="post post--follow" data-reveal>
            <p className="label">Próximas publicações</p>
            <p className="post__title">Acompanhe novos conteúdos direto no perfil.</p>
            <Button href={profile.social.linkedinActivity} variant="line" external>
              Ver todas as publicações
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
