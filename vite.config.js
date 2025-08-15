import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// If you're using Tailwind via postcss.config.js, no need to import tailwindcss here

export default defineConfig({
  base: '/your-repo-name/', // 🔁 Replace with your GitHub repo name
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
