import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows the server to be accessed externally
    port: 5000, // You can specify a port if you want (default is 3000)
  },
})
