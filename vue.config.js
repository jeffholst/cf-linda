// vue.config.js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/cf-linda/' : '/',
  configureWebpack: {
    plugins: [
      new CompressionPlugin()
    ]
  }
}

  