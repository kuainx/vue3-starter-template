import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    visualizer(),
    tailwindcss(),
    AutoImport({
      vueTemplate: true,
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
      dts: './auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
})
