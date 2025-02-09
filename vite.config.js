import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    target: 'esnext'
  },
  base: process.env.BASE_PATH || '/',
  publicDir: 'static'
})
