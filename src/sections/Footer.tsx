import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p className="footer__name">Talohama Marques</p>
        <p className="footer__areas label">Produtos · Cartões · Dados & IA · Pessoas</p>
        <a className="footer__link" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn<span className="sr-only"> (abre em nova aba)</span>
        </a>
        <p className="footer__copy label">© {new Date().getFullYear()} Talohama Marques</p>
      </div>
    </footer>
  )
}
