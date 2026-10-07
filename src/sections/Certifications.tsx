import { profile } from '../data/profile'
import { ArrowUpRight } from '../components/Icons'

export function Certifications() {
  const certs = profile.certifications.filter((c) => c.status === 'confirmado')
  const hidden = profile.certificationsTotal - certs.length
  return (
    <section className="certs" aria-labelledby="certs-title">
      <div className="wrap certs__grid">
        <div className="certs__head" data-reveal>
          <p className="label">Licenças e certificados · {profile.certificationsTotal} no LinkedIn</p>
          <h3 className="certs__title" id="certs-title">
            Certificações
          </h3>
        </div>
        <ul className="certs__list">
          {certs.map((c) => (
            <li className="cert" key={c.name} data-reveal>
              <p className="cert__kicker label">Certificação</p>
              <p className="cert__name">{c.name}</p>
              <p className="cert__issuer">
                {c.issuer}
                {c.date && <span> · {c.date}</span>}
              </p>
              <a
                className="cert__link"
                href={c.credentialUrl ?? profile.social.linkedinCertifications}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.credentialUrl ? 'Ver credencial' : 'Ver no LinkedIn'} <ArrowUpRight size={14} />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
          {hidden > 0 && (
            <li className="cert cert--more" data-reveal>
              <p className="cert__kicker label">+{hidden}</p>
              <p className="cert__name">Outras certificações</p>
              <a
                className="cert__link"
                href={profile.social.linkedinCertifications}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver lista completa <ArrowUpRight size={14} />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
