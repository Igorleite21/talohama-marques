import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { LinkedInGlyph } from './Icons'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#itau', label: 'Itaú' },
  { href: '#formacao', label: 'Formação' },
  { href: '#lideranca', label: 'Liderança' },
  { href: '#insights', label: 'Insights' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#topo" aria-label="Talohama Marques, voltar ao início">
          <span className="nav__mono" aria-hidden="true">tm</span>
          <span className="nav__name">Talohama Marques</span>
        </a>

        <nav className="nav__menu" id="menu" aria-label="Principal">
          <ul>
            {LINKS.map((l, i) => (
              <li key={l.href} style={{ ['--i' as string]: i }}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav__cta" style={{ ['--i' as string]: LINKS.length }}>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInGlyph size={14} />
                LinkedIn<span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          <span className="nav__bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
