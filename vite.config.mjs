import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'menu.html', dest: '' },
        { src: 'catalogo.html', dest: '' },
        { src: 'iniciodesesion.html', dest: '' },
        { src: 'registrarse.html', dest: '' }
      ]
    })
  ],
  build: {
    outDir: 'dist'
  }
})
