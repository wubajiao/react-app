/*
 * @Descripttion :
 * @Author       : wuhaidong
 * @Date         : 2023-03-28 18:00:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-03-29 17:58:35
 */
const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.js'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
}
