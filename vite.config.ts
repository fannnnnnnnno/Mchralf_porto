import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
      webp: { lossless: true },
    }),
    react(),
  ],
  // Pastikan sitemap.xml & robots.txt ikut ter-copy ke dist
  publicDir: 'public',
})