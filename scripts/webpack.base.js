/*
 * @Descripttion : webpack公共配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-28 18:00:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-03-30 15:29:56
 */
const path = require('path')
const { isDev } = require('./constants')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.js'),
  },
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: path.resolve(__dirname, '../dist'),
  },
}
