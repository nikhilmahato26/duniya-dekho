import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(rootDir, 'src') },
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Keep heavy animation libraries in their own long-cached chunks.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils'))
            return 'motion'
          if (id.includes('gsap') || id.includes('lenis')) return 'gsap'
          if (id.includes('embla')) return 'carousel'
          if (id.includes('react-icons')) return 'icons'
          if (id.includes('@radix-ui')) return 'radix'
          return 'vendor'
        },
      },
    },
  },
})
