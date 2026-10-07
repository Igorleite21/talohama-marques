import { useEffect } from 'react'

/**
 * Revela elementos [data-reveal] ao entrar na tela.
 * Elementos já visíveis no carregamento nunca são escondidos; os demais
 * partem de um estado legível (opacidade parcial) — nunca de opacidade 0.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('will-reveal')
        io.observe(el)
      }
    })
    return () => io.disconnect()
  }, [])
}
