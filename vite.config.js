import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://pavelk0nrad.github.io/small-task-timmer/',
  plugins: [react()],
})
