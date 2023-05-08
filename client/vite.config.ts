import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/auth/google': 'http://localhost:5000',
      '/api': 'http://localhost:5000',
    },
  },
  plugins: [react()],
});
