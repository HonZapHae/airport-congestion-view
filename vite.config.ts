import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
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
      VitePWA({
        devOptions: { 
          enabled: false,
        }, // generate web app manifest on dev mode
        includeAssets: [
          'favicon.ico',
          'favicon.svg',
          'icon/*',
        ],
        manifest: { 
          // PWA Minimal Requirements
          // https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
          name: 'Airport Congestion View',
          short_name: '혼잡행',
          description: '여기저기 흩어져있는 공항 혼잡도 정보, 찾을 수 없는 국내 공항 정보까지 한곳에서 알아보자. 주차부터 출국까지 당신의 여유로운 출발을 응원합니다.',
          theme_color: "#631ec6",
          background_color: "631ec6",
          display: "standalone",
          icons: [
            {
              src: 'icons/logo64.png',
              sizes: '64x64',
              type:'image/png',
            },
            {
              src: 'icons/apple-touch-icon.png',
              sizes: '180x180',
              type:'image/png',
            },
            {
              src: 'icons/logo192.png',
              sizes: '192x192',
              type:'image/png',
            },
            {
              src: 'icons/logo512.png',
              sizes: '512x512',
              type:'image/png',
            },
            {
              src: 'icons/logo512.png',
              sizes: '512x512',
              type:'image/png',
              purpose: 'any',
            },
            {
              src: 'icons/logo512.png',
              sizes: '512x512',
              type:'image/png',
              purpose: 'maskable',
            }
          ],
        },
        registerType: 'autoUpdate',
      }),
    ],
    server: {
      // 네이버 지도 크롤링 (avoid CORS)
      proxy: {
        '/inappv5/entry-pc': {
          target: 'https://app.map.naver.com',
          changeOrigin: true,
          secure: false,
          ws: true
        }
      }
    }
  };
})
