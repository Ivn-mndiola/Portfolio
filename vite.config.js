import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import desktopCanvasCss from './scripts/desktop-canvas-css.js'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: { postcss: { plugins: [desktopCanvasCss()] } },
})
