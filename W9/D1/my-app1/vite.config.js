import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // we can modify the port number. vite takes port number by default
  // server:{
  //   port:3001
  // }
})
