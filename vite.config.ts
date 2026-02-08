import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => {
  const base = process.env.BASE_PATH ?? '/'

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
