import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  // resolve: {
  //   alias:{
  //     '~':'src'
  //   }
  // },
})
