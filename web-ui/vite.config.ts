import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base, so the build works wherever it is mounted
  base: './',
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toLocaleDateString())
  }
})
