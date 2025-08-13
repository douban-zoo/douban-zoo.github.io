import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // fast magic
  // base:'https://gcore.jsdelivr.net/gh/douban-zoo/douban-zoo.github.io@gh-pages/',
  define: {
    'process.env': {}
  },
  plugins: [
    tailwindcss(),
    svelte()
  ],
})
