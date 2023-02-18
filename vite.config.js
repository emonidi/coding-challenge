import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server:{
    proxy:{
      "/api":{
        changeOrigin: true,
        target:"http://makeup-api.herokuapp.com/"
      }
    }
  }
})
