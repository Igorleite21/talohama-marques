import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'
import { SectionHead } from '../components/SectionHead'
import { dated, formatDuration, formatYM, monthsBetween } from '../lib/dates'

export function Journey() {
  const roles = dated(profile.experience)
  const listRef = useRef<HTMLOListElement>(null)

  // linha da timeline que se preenche conforme o scroll
  useEffect(() => {
    const el = listRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height))
      el.style.setProperty('--progress', p.toFixed(4))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="journey section" id="trajetoria" aria-labelledby="trajetoria-title">
      <div className="wrap">
        <SectionHead
          id="trajetoria"
          chapter="II"
          kicker="Como chegou até aqui"
          title={
            <>
              De processos de TI à <em>liderança de produto</em>.
            </>
          }
          lede="Cada etapa abriu a seguinte: qualidade e metodologia de projetos, processos e automação, times de dados e, agora, produto."
        />

        <ol className="journey__list" ref={listRef}>
          {roles.map((r) => {
            const current = r.end === null
            return (
              <li className={`jitem ${current ? 'jitem--current' : ''}`} key={r.id} data-reveal>
                <p className="jitem__year" aria-hidden="true">
                  {r.start.slice(0, 4)}
                </p>
                <span className="jitem__dot" aria-hidden="true" />
                <article className="jitem__card">
                  <p className="jitem__meta label">
                    <time dateTime={r.start}>{formatYM(r.start)}</time> — {current ? 'hoje' : <time dateTime={r.end!}>{formatYM(r.end)}</time>}
                    <span className="jitem__dur">{formatDuration(monthsBetween(r.start, r.end))}</span>
                  </p>
                  <h3 className="jitem__title">{r.title}</h3>
                  <p className="jitem__company">
                    {r.unit ?? r.company}
                    {r.location && <span> · {r.location}</span>}
                  </p>
                  <p className="jitem__area">{r.area}</p>
                  {r.highlights.length > 0 && (
                    <ul className="jitem__list">
                      {r.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  {r.team && (
                    <p className="jitem__team label">
                      Time: {r.team.internal} pessoas internas{r.team.external ? ` + ${r.team.external} terceiros` : ''}
                    </p>
                  )}
                </article>
              </li>
            )
          })}
        </ol>
        <p className="journey__note label">
          Anterior a 2014: Técnico administrativo no Itaú Unibanco (período a confirmar).
        </p>
      </div>
    </section>
  )
}
