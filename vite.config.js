import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "demo_host_app",
      filename: "remoteEntry.js",
      remotes: {
        demo_remote_app:"http://localhost:4040/assets/remoteEntry.js"
      },
      exposes: {
        "./link":"./src/Link.jsx"
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
