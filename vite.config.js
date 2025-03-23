import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: "/",
    server: {
      port: process.env.PORT || 5173,
    },
    build: {
      outDir: "dist",
    },
  };
});
