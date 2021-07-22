import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 3000,
    open: true
    /*proxy: {
      '/api': {
        target: `http://url`,
        changeOrigin: true,
      },
    }*/
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      Components: resolve(__dirname, './src/components')
    }
  }
})
