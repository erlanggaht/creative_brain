import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import dotenv from 'dotenv'
dotenv.config() // load env vars from .env
import { VitePWA } from 'vite-plugin-pwa'

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 100,
  },
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 100,
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 100,
  },
  tiff: {
    // https://sharp.pixelplumbing.com/api-output#tiff
    quality: 100,
  },
  // gif does not support lossless compression
  // https://sharp.pixelplumbing.com/api-output#gif
  gif: {},
  webp: {
    // https://sharp.pixelplumbing.com/api-output#webp
    lossless: true,
  },
  avif: {
    // https://sharp.pixelplumbing.com/api-output#avif
    lossless: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(DEFAULT_OPTIONS),
    VitePWA({ 
    registerType: 'autoUpdate', 
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'Brain./Me',
      short_name: 'Erlangga Hidayatullah',
      description: 'Erlangga Hidayatullah website portfolio made with reactjs and tailwind technology plus a UI library called flowbite',
      theme_color: '#11101a',
      icons: [
        {
          src: '/vite.ico',
          sizes: '192x192',
          type: 'image/ico'
        },
        {
          src: '/vite.ico',
          sizes: '512x512',
          type: 'image/ico'
        }
      ]
    }
  })
],
  define: {
    __HOST__: `"${process.env.HOST}"`,
  },
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, './src'),
    },
  },

  
})
