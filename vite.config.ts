import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/binance-api': {
        target: 'https://api.binance.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/binance-api/, ''),
        secure: true,
      },
      '/binance-testnet': {
        target: 'https://testnet.binance.vision',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/binance-testnet/, ''),
        secure: true,
      },
      '/binance-futures-api': {
        target: 'https://fapi.binance.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/binance-futures-api/, ''),
        secure: true,
      },
      '/binance-futures-testnet': {
        target: 'https://testnet.binancefuture.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/binance-futures-testnet/, ''),
        secure: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
