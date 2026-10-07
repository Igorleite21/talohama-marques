import type { Role } from '../data/profile'

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

export const toIndex = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return y * 12 + (m - 1)
}

export const nowIndex = (d = new Date()) => d.getFullYear() * 12 + d.getMonth()

/** Meses inclusivos (mesma convenção do LinkedIn: jun/2014–ago/2016 = 2a3m). */
export const monthsBetween = (start: string, end: string | null) =>
  (end ? toIndex(end) : nowIndex()) - toIndex(start) + 1

export const formatYM = (ym: string | null) => {
  if (!ym) return 'hoje'
  const [y, m] = ym.split('-').map(Number)
  return `${MONTHS[m - 1]} ${y}`
}

export const formatDuration = (months: number) => {
  const y = Math.floor(months / 12)
  const m = months % 12
  const ys = y ? `${y} ${y === 1 ? 'ano' : 'anos'}` : ''
  const ms = m ? `${m} ${m === 1 ? 'mês' : 'meses'}` : ''
  return [ys, ms].filter(Boolean).join(' e ') || 'menos de 1 mês'
}

/** Soma meses de um conjunto de cargos, sem contar meses sobrepostos duas vezes. */
export const uniqueMonths = (roles: Role[]) => {
  const set = new Set<number>()
  for (const r of roles) {
    if (!r.start) continue
    const a = toIndex(r.start)
    const b = r.end ? toIndex(r.end) : nowIndex()
    for (let i = a; i <= b; i++) set.add(i)
  }
  return set.size
}

export const dated = (roles: Role[]) =>
  roles.filter((r): r is Role & { start: string } => r.status === 'confirmado' && !!r.start)
