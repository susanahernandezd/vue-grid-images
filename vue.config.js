const path = require('path')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
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
  }

}
