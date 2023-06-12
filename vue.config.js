const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  filenameHashing: false,
  assetsDir: 'assets',
  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.output = {
        ...args[0].terserOptions.output,
        comments: false // exclude all comments from output
      }
      return args
    })

    if (process.env.NODE_ENV === 'production') {
      config
        .output
        .filename('assets/js/[name].js?[contenthash:8]')
        .chunkFilename('assets/js/[name].js?[contenthash:8]')

      config.plugin('extract-css').tap(args => {
        args[0].filename = 'assets/css/[name].css?[contenthash:8]'
        args[0].chunkFilename = 'assets/css/[name].css?[contenthash:8]'
        return args
      })
    }

    config.plugin('html').tap(args => {
      args[0].title = '澤影映像電影特效'
      return args
    })
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true

      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
          }),
        })
      );
    }
  }
};
