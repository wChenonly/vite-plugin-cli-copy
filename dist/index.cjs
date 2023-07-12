'use strict';

const clipboardy = require('clipboardy');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const clipboardy__default = /*#__PURE__*/_interopDefaultCompat(clipboardy);

function cliCopy(options = {}) {
  return {
    name: "vite-plugin-cli-copy",
    apply: "serve",
    configureServer(server) {
      const _listen = server.listen;
      server.listen = function() {
        const isRestart = arguments[1] === true;
        if (!isRestart) {
          server.httpServer?.on("listening", () => {
            setTimeout(() => copy(server, options), 0);
          });
        }
        return _listen.apply(this, arguments);
      };
    }
  };
}
function copy(server, options) {
  let networkUrls = server.resolvedUrls?.network;
  if (!networkUrls)
    return;
  if (options.filter) {
    networkUrls = networkUrls.filter(options.filter);
  }
  if (networkUrls.length === 0)
    return;
  const info = server.config.logger.info;
  try {
    clipboardy__default.writeSync(networkUrls[0]);
    info(`
  ${cyan("Copied to clipboard Network URL:")} ${networkUrls[0]}`);
  } catch (error) {
  }
}
function cyan(str) {
  return `\x1B[36m${str}\x1B[0m`;
}

module.exports = cliCopy;
