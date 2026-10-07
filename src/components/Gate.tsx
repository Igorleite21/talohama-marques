import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { access, checkPassword } from '../config/access'

const read = () => {
  try {
    return sessionStorage.getItem(access.storageKey) === access.hash
  } catch {
    return false
  }
}

export function Gate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(() => !access.enabled || read())
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [busy, setBusy] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!ok) inputRef.current?.focus()
  }, [ok])

  if (ok) return <>{children}</>

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    const valid = await checkPassword(value)
    setBusy(false)
    if (valid) {
      try {
        sessionStorage.setItem(access.storageKey, access.hash)
      } catch {
        /* sem storage: libera só nesta visita */
      }
      setOk(true)
      window.scrollTo(0, 0)
    } else {
      setError(true)
      setValue('')
      inputRef.current?.focus()
    }
  }

  return (
    <main className="gate">
      <div className="gate__box">
        <p className="gate__mono" aria-hidden="true">
          tm
        </p>
        <p className="label gate__kicker">Acesso reservado</p>
        <h1 className="gate__title">
          Talohama <em>Marques</em>
        </h1>
        <p className="gate__text">Este site ainda é privado. Digite a senha de acesso para continuar.</p>
        <form className="gate__form" onSubmit={submit} noValidate>
          <label className="sr-only" htmlFor="gate-password">
            Senha de acesso
          </label>
          <input
            ref={inputRef}
            id="gate-password"
            className={`gate__input ${error ? 'is-error' : ''}`}
            type="password"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Senha"
            value={value}
            aria-invalid={error}
            aria-describedby={error ? 'gate-error' : undefined}
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
          />
          <button className="btn btn--solid gate__btn" type="submit" disabled={busy || !value}>
            Entrar
          </button>
        </form>
        <p className="gate__error label" id="gate-error" role="alert">
          {error ? 'Senha incorreta. Confira e tente de novo.' : ''}
        </p>
      </div>
    </main>
  )
}
