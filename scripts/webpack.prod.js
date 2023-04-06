/*
 * @Descripttion : webpack生产环境配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-30 14:38:43
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-06 11:46:06
 */
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    // 抽离css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
  ],
})
