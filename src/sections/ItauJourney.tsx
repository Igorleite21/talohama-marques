import { profile, type Role } from '../data/profile'
import { SectionHead } from '../components/SectionHead'
import { dated, formatDuration, formatYM, monthsBetween, nowIndex, toIndex, uniqueMonths } from '../lib/dates'

const TRACKS: Role['track'][] = ['TI', 'Projetos & Processos', 'Coordenação', 'Produto']
const TRACK_TEXT: Record<Role['track'], string> = {
  TI: 'Metodologia, qualidade e arquitetura de processos na TI.',
  'Projetos & Processos': 'Projetos de qualidade, eficiência e transformação do atendimento.',
  Coordenação: 'Times de automação, tecnologia e dados sob sua gestão.',
  Produto: 'Estratégia end-to-end da plataforma de cartões.',
}

export function ItauJourney() {
  const roles = dated(profile.experience)
  const itau = roles.filter((r) => r.companyGroup === 'Itaú')
  const total = uniqueMonths(itau)

  // escala do gráfico: de janeiro do primeiro ano até dezembro do ano atual
  const a = Math.floor(toIndex(roles[0].start) / 12) * 12
  const b = (Math.floor(nowIndex() / 12) + 1) * 12
  const span = b - a
  const years = Array.from({ length: span / 12 + 1 }, (_, i) => a / 12 + i)
  const pos = (i: number) => ((i - a) / span) * 100

  return (
    <section className="itau section" id="itau" aria-labelledby="itau-title">
      <div className="wrap">
        <SectionHead
          id="itau"
          chapter="III"
          kicker="Itaú Unibanco"
          title={
            <>
              Uma jornada de <em>evolução</em>.
            </>
          }
          lede="Do suporte de TI à liderança de produto, com passagens por cobrança, iti, automação, chargeback e cartões. Uma saída de sete meses para a Serasa e o retorno para liderar dados e, depois, produto."
        />

        <div className="itau__summary" data-reveal>
          <p className="itau__total">
            <span className="label">Tempo no grupo Itaú</span>
            <strong>{formatDuration(total)}</strong>
          </p>
          <p className="itau__method">
            Soma dos períodos publicados de {formatYM(itau[0].start)} até hoje, sem os 7 meses na Serasa Experian. O cargo de Técnico administrativo, anterior, ainda não tem data confirmada e não entra na
            conta.
          </p>
        </div>

        <ol className="phases" data-reveal>
          {TRACKS.map((t, i) => (
            <li key={t} className="phase">
              <span className="phase__n label">Fase {i + 1}</span>
              <span className="phase__name">{t}</span>
              <span className="phase__text">{TRACK_TEXT[t]}</span>
            </li>
          ))}
        </ol>

        <figure className="gantt" data-reveal aria-labelledby="gantt-cap">
          <figcaption id="gantt-cap" className="label gantt__cap">
            Cargos em escala de tempo · {years[0]}–{years[years.length - 1] - 1}
          </figcaption>
          <div className="gantt__axis" aria-hidden="true">
            {years.map((y, i) =>
              i < years.length - 1 ? (
                <span key={y} style={{ left: `${pos(y * 12)}%` }}>
                  {i % 2 === 0 ? `’${String(y).slice(2)}` : ''}
                </span>
              ) : null,
            )}
          </div>
          <ul className="gantt__rows">
            {roles.map((r) => {
              const s = toIndex(r.start)
              const e = (r.end ? toIndex(r.end) : nowIndex()) + 1
              const other = r.companyGroup !== 'Itaú'
              return (
                <li
                  key={r.id}
                  className={`grow ${other ? 'grow--other' : ''} ${r.end ? '' : 'grow--now'}`}
                  data-track={r.track}
                >
                  <span className="grow__label">
                    <span className="grow__title">{r.title}</span>
                    <span className="grow__sub label">
                      {other ? r.company : (r.unit ?? r.track)} · {formatDuration(monthsBetween(r.start, r.end))}
                    </span>
                  </span>
                  <span className="grow__track" aria-hidden="true">
                    {years.map((y) => (
                      <i key={y} style={{ left: `${pos(y * 12)}%` }} />
                    ))}
                    <span className="grow__bar" style={{ left: `${pos(s)}%`, width: `${pos(e) - pos(s)}%` }} />
                  </span>
                </li>
              )
            })}
          </ul>
        </figure>
      </div>
    </section>
  )
}
