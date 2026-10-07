import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` -> build normal (assets separados, ideal para hospedagem).
// `npm run build:single` -> um único index.html autocontido (preview/compartilhamento).
export default defineConfig(({ mode }) => ({
  base: './', // caminhos relativos: funciona em usuario.github.io/repositorio
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: { outDir: mode === 'single' ? 'dist-single' : 'dist' },
}))
