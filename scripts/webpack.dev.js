/*
 * @Descripttion : webpack开发环境配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-30 12:29:27
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-03-30 14:42:35
 */
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
})
