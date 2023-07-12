<h1 align="center">vite-plugin-cli-copy</h1>
<p align="center">Start the project and automatically copy the terminal's network URL</p>

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

- package.json

```json
{
  "scripts": {
    "dev": "vite --host"
  }
}
```

- vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cliCopy from 'vite-plugin-cli-copy'

export default defineConfig({
  plugins: [vue(), cliCopy()]
})
```

## Thanks

Great thanks to [@bluwy](https://github.com/bluwy) The project of [vite-plugin-qrcode](https://github.com/svitejs/vite-plugin-qrcode)

## License

[MIT © wChenonly-latest](./LICENSE)
