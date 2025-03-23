import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const isGitHub = process.env.GITHUB_ACTIONS === "true"; // Detect GitHub deployment
  return {
    plugins: [react()],
    base: isGitHub ? "/nike-shoes-website-project/" : "/", // GitHub vs. Vercel
    server: {
      port: process.env.PORT || 5173,
    },
    build: {
      outDir: "dist",
    },
  };
});
