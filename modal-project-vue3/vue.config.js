const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // Need an extra config to avoid Vue.js (v3) mixed content error when opened from Gitpod in a browser (see https://github.com/gitpod-io/gitpod/issues/11170)
  devServer: {
    allowedHosts: "all",
    client: {
      // Reference : https://webpack.js.org/configuration/dev-server/#websocketurl
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
  },
});
