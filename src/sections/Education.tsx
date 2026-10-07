import { profile } from '../data/profile'
import { SectionHead } from '../components/SectionHead'
import { formatYM } from '../lib/dates'

const period = (s: string | null, e: string | null) => {
  if (!s) return null
  const f = (v: string) => (v.length > 4 ? formatYM(v) : v)
  return `${f(s)} — ${e ? f(e) : 'em andamento'}`
}

export function Education() {
  const items = profile.education.filter((e) => e.status === 'confirmado')
  return (
    <section className="edu section" id="formacao" aria-labelledby="formacao-title">
      <div className="wrap">
        <SectionHead
          id="formacao"
          chapter="IV"
          kicker="O que aprendeu"
          title={
            <>
              Aprender para <em>transformar</em>.
            </>
          }
          lede="Duas especializações que espelham o propósito dela: uma em pessoas, outra em dados."
        />
        <ol className="edu__list">
          {items.map((e) => {
            const p = period(e.start, e.end)
            const ongoing = !!e.start && !e.end
            return (
              <li className={`edu__item ${e.institution ? '' : 'edu__item--minor'}`} key={e.course} data-reveal>
                <p className="edu__degree label">
                  {e.degree}
                  {ongoing && <span className="pill">Em andamento</span>}
                </p>
                <h3 className="edu__course">{e.course}</h3>
                {e.institution && <p className="edu__inst">{e.institution}</p>}
                {p && <p className="edu__period label">{p}</p>}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
