# Talohama Marques — site profissional

React 18 + Vite + TypeScript, sem bibliotecas extras de UI/animação.

## Rodar
```bash
npm install
npm run dev          # desenvolvimento
npm run build        # produção (dist/)
npm run build:single # um único index.html autocontido (dist-single/)
```
Defina o domínio final em `.env` (`VITE_SITE_URL`) para canonical e Open Graph.
Adicione `public/og-image.png` (1200×630) para o compartilhamento em redes.

## Estrutura
```
src/
 ├── data/profile.ts     ← TODO o conteúdo (editar aqui)
 ├── lib/                ← cálculo de datas/tempo, reveal ao scroll
 ├── components/         ← Nav, Button, SectionHead, Counter, Icons
 ├── sections/           ← Hero, Metrics, About, Journey, ItauJourney, Education,
 │                         Certifications, Leadership, Skills, Insights, Contact, Footer
 └── styles/             ← tokens.css (design system), base.css, sections.css
```

## Regras de conteúdo
- Somente itens com `status: 'confirmado'` aparecem no site.
- Durações, "anos de carreira" e "tempo no Itaú" são calculados das datas — nunca digitados.
- Pendências marcadas com `PENDENTE` em `profile.ts`: data do cargo de Técnico administrativo,
  2 certificações, link direto das publicações, foto (só com autorização).
