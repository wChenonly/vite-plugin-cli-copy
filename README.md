<h1 align="center">vite-plugin-cli-copy</h1>
<p align="center">Find if there are duplicate images in your project when building it</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-cli-copy" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-cli-copy?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-cli-copy" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-cli-copy?color=50a36f&label="></a>
</p>

English | [简体中文](./README.zh_CN.md)

![](./instructions/copy.jpg)

## Install

```bash
npm install vite-plugin-cli-copy -D
pnpm add vite-plugin-cli-copy -D
```

## Usage

- vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cliCopy from 'vite-plugin-cli-copy'

export default defineConfig({
  plugins: [vue(), cliCopy({})]
})
```

## License

[MIT © wChenonly-latest](./LICENSE)
