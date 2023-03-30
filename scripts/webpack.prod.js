/*
 * @Descripttion : webpack生产环境配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-30 14:38:43
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-03-30 15:32:24
 */
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
})
