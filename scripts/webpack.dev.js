/*
 * @Descripttion : webpack开发环境配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-30 12:29:27
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-04 17:03:36
 */
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true, // 热更新
    open: true, // 打开默认浏览器
    compress: true, // 是否启用gzip压缩
    client: {
      logging: 'error', // 只打印报错，不建议
      overlay: {
        // 有报错发生，直接覆盖浏览器视窗，显示错误
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
