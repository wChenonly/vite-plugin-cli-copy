import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cliCopy from '../dist/index.mjs'

export default defineConfig({
  plugins: [vue(), cliCopy({})]
})
