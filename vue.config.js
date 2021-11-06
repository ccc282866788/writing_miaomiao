module.exports= {

  devServer: {
    open: true,
    //本地真机测试
    // host: "localhost",
    // port: 8900,
    https: false,
    disableHostCheck: true,
    proxy: {
    '/cross/': {
    target: 'http://localhost:8888',
    ws: true,
    secure: false,
    pathRewrite: {
    '^/cross/': '/'
    },
    changeOrigin: true,
    }
    }
    },
  productionSourceMap: false
}
