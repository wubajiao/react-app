/*
 * @Descripttion : webpack公共配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-28 18:00:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-03-31 14:55:38
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板路径
      filename: 'index.html', // 生成的文件
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev, // 开启后与devtool设置一致，开发环境开启，生产环境关闭
              importLoaders: 0, // 指定在css loader 处理前使用的loader数量
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1, // 需要先被less-loader 处理，所以这里设置为1
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1, // 需要先被less-loader 处理，所以这里设置为1
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
}
