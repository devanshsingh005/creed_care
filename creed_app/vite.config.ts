import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // ensure it's pointing to the correct location
  build: {
    outDir: 'dist', // default is dist but safe to specify
  }
})
