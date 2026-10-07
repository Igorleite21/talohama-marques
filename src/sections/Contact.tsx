import { profile } from '../data/profile'
import { Button } from '../components/Button'
import { LinkedInGlyph } from '../components/Icons'

export function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contato-title">
      <div className="wrap contact__inner">
        <p className="label contact__kicker">Cap. VII · Onde encontrá-la</p>
        <h2 className="contact__title" id="contato-title" data-reveal>
          Vamos continuar a conversa <em>no LinkedIn</em>.
        </h2>
        <div className="contact__row" data-reveal>
          <Button href={profile.social.linkedin} external icon={<LinkedInGlyph />}>
            Conecte-se no LinkedIn
          </Button>
          <p className="contact__meta label">
            {profile.location} · {profile.connections}
          </p>
        </div>
      </div>
    </section>
  )
}
