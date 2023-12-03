import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      types: '/src/types',
      constants: '/src/constants',
      utils: '/src/utils',
      hooks: '/src/hooks',
      stores: '/src/stores',
    },
  },
})
