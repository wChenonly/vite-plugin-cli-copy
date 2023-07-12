<h1 align="center">vite-plugin-cli-copy</h1>
<p align="center">启动项目并自动复制终端的网络 URL</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-cli-copy" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-cli-copy?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-cli-copy" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-cli-copy?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.md)

![](./instructions/copy.jpg)

## 安装

```bash
npm install vite-plugin-cli-copy -D
pnpm add vite-plugin-cli-copy -D
```

## 用法

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
  plugins: [vue(), cliCopy({})]
})
```

## 许可证

[MIT © wChenonly-latest](./LICENSE)
