// vue.config.js
const webpack = require('webpack')

module.exports = {
  transpileDependencies: ['vue-router-tab'],
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
    resolve: {
      extensions: ['.js'],
      alias: {
        jquery: 'jquery/dist/jquery.slim.js'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
