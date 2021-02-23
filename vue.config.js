const path = require('path')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugin('workbox')
    config.resolve.symlinks(false)
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    plugins: [ new GenerateSW() ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/main.scss')]
    }
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    themeColor: '#42b983',
    msTileColor: '#42b983',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      background_color: '#42b983'
    }
  }

}
