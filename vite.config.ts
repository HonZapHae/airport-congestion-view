import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  console.log("mode: ", mode);
  return {
    base: '/', // public directory
    plugins: [
      react(),
      svgr(),
      tsconfigPaths(),
    ],
    server: {
      // 네이버 지도 크롤링 (avoid CORS)
      proxy: {
        '/inappv5/entry-pc': {
          target: 'https://app.map.naver.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        }
      }
    }
  };
})
