const path = require('path')

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
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/main.scss')]
    }
  },
  pwa: {
    name: 'su-pwa',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js'
    },
    themeColor: '#42b983',
    msTileColor: '#42b983',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      background_color: '#42b983'
    }
  }

}
