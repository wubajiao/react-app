/*
 * @Descripttion : webpack生产环境配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-30 14:38:43
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-03-31 12:15:54
 */
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
})
