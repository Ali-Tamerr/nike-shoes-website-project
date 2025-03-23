import { defineConfig } from 'vite'
import vercel from 'vite-plugin-vercel';
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react(), vercel()],
  base: process.env.VITE_BASE_PATH || "/nike-shoes-website-project/",
  server: {
    port: process.env.PORT,
  },
  build: {
    outDir: 'dist',
  },
})
