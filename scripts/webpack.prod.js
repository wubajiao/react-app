/*
 * @Descripttion : webpack生产环境配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-30 14:38:43
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-06 14:46:56
 */
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const base = require('./webpack.base')

const { IS_ANALYZE } = process.env

const pluginsList = [
  new CleanWebpackPlugin(),
  // 抽离css
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
    ignoreOrder: false,
  }),
  // 添加包注释(因为打包的时候全部注释去除了)
  new webpack.BannerPlugin({
    raw: true,
    banner: '/** @preserve Powered by react-ts-quick-starter */',
  }),
]

if (IS_ANALYZE) {
  pluginsList.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
    }),
  )
}

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: pluginsList,
})
