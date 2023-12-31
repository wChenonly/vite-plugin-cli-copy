import type { Plugin, ViteDevServer } from 'vite'
import clipboardy from 'clipboardy'

export default function cliCopy(options: PluginOptions = {}): Plugin {
  return {
    name: 'vite-plugin-cli-copy',
    apply: 'serve',
    configureServer(server) {
      server.httpServer?.on('listening', () => {
        setTimeout(() => copy(server, options), 0)
      })
    }
  }
}

function copy(server: ViteDevServer, options: PluginOptions) {
  let networkUrls = server.resolvedUrls?.network

  if (!networkUrls) return

  if (options.filter) {
    networkUrls = networkUrls.filter(options.filter)
  }

  if (networkUrls.length === 0) return

  const info = server.config.logger.info
  try {
    clipboardy.writeSync(networkUrls[0])
    info(`\n  ${cyan('Copied to clipboard Network URL:')} ${networkUrls[0]}`)
  } catch (error) {}
}

function cyan(str: string): string {
  return `\x1b[36m${str}\x1b[0m`
}

export interface PluginOptions {
  /**
   * filter list of shown copy codes. Useful if you have multiple interfaces and only need one
   *
   *  examples:
   *    url => url.startsWith('http://192.')
   *    url => !url.startsWith('http://172.)
   *    url => url === 'http://192.168.1.70:4173'
   *
   * @param url {string} ip address
   * @returns {boolean}
   */
  // eslint-disable-next-line no-unused-vars
  filter?: (url: string) => boolean
}
