/*
 * @Descripttion : 代理配置
 * @Author       : wuhaidong
 * @Date         : 2023-04-04 17:58:28
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-05 21:32:13
 */
const proxySettings = {
  // 接口代理1
  '/api/': {
    target: 'http://192.168.31.35:4000',
    changeOrigin: true,
  },
  // 接口代理2
  '/api-2/': {
    target: 'http://192.168.31.35:4001',
    changeOrigin: true,
    pathRewrite: {
      '^/api-2': '',
    },
  },
  // .....
}

module.exports = proxySettings
