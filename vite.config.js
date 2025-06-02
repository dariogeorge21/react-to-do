import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-to-do/', // Replace 'react-to-do' with your GitHub repository name
  build: {
    outDir: 'dist',
  },
})
