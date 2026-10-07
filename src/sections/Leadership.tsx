import { profile } from '../data/profile'
import { SectionHead } from '../components/SectionHead'

export function Leadership() {
  const evidence = [
    {
      figure: '16 + 7' as string | null,
      label: 'Automações de TI · Itaú',
      text: 'Coordenação de 16 pessoas internas e 7 terceiros em cartão de crédito, cobrança, iti, itaushop e novos negócios.',
    },
    {
      figure: '8',
      label: 'Dados & Analytics · Chargeback',
      text: 'Gestão e desenvolvimento do time de dados da operação de cartão de crédito, com modelos preditivos e painéis para decisão.',
    },
    {
      figure: null,
      label: 'Time multidisciplinar · Serasa',
      text: 'Gestão do time de tecnologia do Serasa Premium, produto antifraude da Serasa Experian.',
    },
  ]
  const methods = ['OKRs', 'PDCA', 'Priorização', 'Discovery', 'Ágil e Lean', 'Governança de projetos']

  return (
    <section className="lead section" id="lideranca" aria-labelledby="lideranca-title">
      <div className="wrap">
        <SectionHead
          id="lideranca"
          chapter="V"
          kicker="Como lidera"
          title={
            <>
              Liderar também é <em>desenvolver</em>.
            </>
          }
          lede="Times de tecnologia, automação e dados, sempre com a mesma marca: estratégia ligada à execução e pessoas no centro."
        />

        <ul className="lead__grid">
          {evidence.map((e) => (
            <li className="lead__card" key={e.label} data-reveal>
              <p className={`lead__fig ${e.figure ? '' : 'lead__fig--glyph'}`} aria-hidden="true">
                {e.figure ?? '◆'}
              </p>
              <p className="lead__label label">{e.label}</p>
              <p className="lead__text">{e.text}</p>
            </li>
          ))}
        </ul>

        <div className="lead__methods" data-reveal>
          <p className="label">Ferramentas de gestão citadas no perfil</p>
          <ul>
            {methods.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        {profile.mentoring.status === 'confirmado' && (
          <aside className="mentor" data-reveal aria-labelledby="mentor-title">
            <p className="label mentor__kicker">Mentoria · Mulheres em produto</p>
            <h3 className="mentor__title" id="mentor-title">
              Uma mulher que <em>levanta outras mulheres</em>.
            </h3>
            <p className="mentor__text">
              Talohama é mentora no {profile.mentoring.program}, com a mensagem que ela mesma compartilhou: seja uma mulher que levanta outras mulheres.
            </p>
            <a className="mentor__link" href={profile.insights[0].url} target="_blank" rel="noopener noreferrer">
              Ver publicação no LinkedIn →<span className="sr-only"> (abre em nova aba)</span>
            </a>
          </aside>
        )}
      </div>
    </section>
  )
}
