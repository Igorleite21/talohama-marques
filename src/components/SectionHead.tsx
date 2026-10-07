import type { ReactNode } from 'react'

type Props = {
  chapter: string // número do capítulo (ordem real da narrativa)
  kicker: string
  title: ReactNode
  lede?: ReactNode
  id: string
  tone?: 'paper' | 'panel'
}

export function SectionHead({ chapter, kicker, title, lede, id }: Props) {
  return (
    <header className="shead" data-reveal>
      <p className="shead__kicker label">
        <span className="shead__num">Cap. {chapter}</span>
        <span className="shead__line" aria-hidden="true" />
        <span>{kicker}</span>
      </p>
      <h2 className="shead__title" id={`${id}-title`}>
        {title}
      </h2>
      {lede && <p className="shead__lede">{lede}</p>}
    </header>
  )
}
