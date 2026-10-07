import { profile } from '../data/profile'
import { Counter } from '../components/Counter'
import { dated, uniqueMonths } from '../lib/dates'

export function Metrics() {
  const roles = dated(profile.experience)
  const careerYears = Math.floor(uniqueMonths(roles) / 12) // carreira contínua desde a 1ª data
  const itauYears = Math.floor(uniqueMonths(roles.filter((r) => r.companyGroup === 'Itaú')) / 12)
  const biggestTeam = Math.max(...roles.map((r) => (r.team ? r.team.internal + (r.team.external ?? 0) : 0)))
  const mbas = profile.education.filter((e) => e.degree === 'MBA' && e.status === 'confirmado').length

  const items = [
    { value: careerYears, suffix: '+', label: 'anos de carreira', note: 'desde jun 2014' },
    { value: itauYears, suffix: '+', label: 'anos no grupo Itaú', note: 'incluindo o iti' },
    { value: biggestTeam, suffix: '', label: 'pessoas em um único time', note: '16 internas + 7 terceiros' },
    { value: mbas, suffix: '', label: 'MBAs: pessoas e dados', note: 'FGV · Mackenzie (em curso)' },
  ]

  return (
    <section className="metrics" aria-label="Carreira em números">
      <div className="wrap">
        <dl className="metrics__grid">
          {items.map((m) => (
            <div className="metrics__item" key={m.label} data-reveal>
              <dt className="metrics__label">{m.label}</dt>
              <dd className="metrics__value">
                <Counter value={m.value} suffix={m.suffix} />
              </dd>
              <dd className="metrics__note label">{m.note}</dd>
            </div>
          ))}
        </dl>
        <p className="metrics__source label">Números calculados a partir das datas publicadas no LinkedIn.</p>
      </div>
    </section>
  )
}
