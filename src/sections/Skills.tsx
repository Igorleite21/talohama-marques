import { profile } from '../data/profile'

export function Skills() {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="skills__head" data-reveal>
          <p className="label">Extraídas das descrições de experiência</p>
          <h3 className="skills__title" id="skills-title">
            Competências
          </h3>
        </div>
        <div className="skills__grid">
          {profile.skills.map((g) => (
            <div className="skills__group" key={g.group} data-reveal>
              <h4 className="skills__name label">{g.group}</h4>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
