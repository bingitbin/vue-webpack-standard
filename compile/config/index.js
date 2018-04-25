'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
var Mock = require('mockjs')
const path = require('path')
const device = process.device
var domain = device === 'PC' ? 'event.31huiyi.com' : 'event.3188.la'
process.mock = true
var proxyTable = process.mock ? {
  '/api': {
    target: 'http://rapapi.org/mockjs/33662',
    changeOrigin: true,
    onProxyRes (proxyRes, req, res) {
      // var body = new Buffer('')
      var _write = res.write
      res.write = function (data) {
        _write.call(res, JSON.stringify(Mock.mock(JSON.parse(data.toString()))))
      }

      // proxyRes.on('data', function (data) {
      //   body = Buffer.concat([body, data])
      // })

      // proxyRes.on('write', function (d) {
      //   console.log('write:')
      //   d = null
      // })

      // proxyRes.on('end', function () {
      //   body = body.toString()
      //   console.log('res from proxied server:', body)
      //   res.end('my response to cli')
      // })
    }
  }
} : {
  '^/api': {
    target: `http://${domain}/`,
    changeOrigin: true
  }
}

module.exports = {
  dev: {
    env: require('./dev.env'),
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: proxyTable,

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, `../../${device}/packedassets/index.html`),

    // Paths
    assetsRoot: path.resolve(__dirname, `../../${device}/packedassets`),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
