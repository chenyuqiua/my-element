
const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('packages', path.resolve('packages'))

    config.resolve.extensions
      .merge(['.ts', '.js', '.vue', '.json'])

    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => { return options })
  }
}