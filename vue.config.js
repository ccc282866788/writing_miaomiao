module.exports= {
  devServer: {
    proxy: {
      '/x/': {
      target: 'https://api.bilibili.com',
      changeOrigin: true,
      headers: {
        referer: 'https://www.bilibili.com'
        }
      },
      '/main/': {
        target: 'http://s.search.bilibili.com',
        changeOrigin: true,
        headers: {
        referer: 'https://www.bilibili.com'
        }
      }
    }
  }
}
