import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['/Users/bilal/Desktop/Workspace/Frontend/Portfolio/node_modules/.vite/deps/chunk-7MGIEXE5.js?v=298a606e']
  },
  resolve: {
    extensions: ['.js', '.jsx'],
},
})
