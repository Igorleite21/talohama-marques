/**
 * Proteção leve de acesso (GitHub Pages não oferece login real).
 * A senha NÃO fica em texto aberto: guardamos só o SHA-256 de `${SALT}:${senha}`.
 * Para trocar a senha:  node -e "console.log(require('crypto').createHash('sha256').update('talohama:NOVA').digest('hex'))"
 * Para desligar a tela de senha: enabled = false.
 */
export const access = {
  enabled: true,
  salt: 'talohama',
  hash: '83b0a27b7f278eb8547cd7d3bfd73984baf97b1ac7f80551ae4f40b23afbf9b2',
  storageKey: 'tm-access',
}

export async function checkPassword(value: string) {
  const data = new TextEncoder().encode(`${access.salt}:${value.trim()}`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  const hex = Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('')
  return hex === access.hash
}
