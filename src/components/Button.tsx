import type { ReactNode } from 'react'
import { ArrowRight, ArrowUpRight } from './Icons'

type Props = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'line' | 'text'
  external?: boolean
  icon?: ReactNode
}

export function Button({ href, children, variant = 'solid', external, icon }: Props) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className={`btn btn--${variant}`} href={href} {...ext}>
      {icon}
      <span>{children}</span>
      <span className="btn__arrow">{external ? <ArrowUpRight /> : <ArrowRight />}</span>
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  )
}
