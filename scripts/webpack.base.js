/*
 * @Descripttion : webpack公共配置
 * @Author       : wuhaidong
 * @Date         : 2023-03-28 18:00:56
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2023-04-04 16:48:22
 */
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { resolve } = require('path')
const { isDev } = require('./constants')

const getCssLoaders = (importLoaders) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: isDev,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: isDev,
      postcssOptions: {
        plugins: [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true,
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
          'postcss-normalize',
        ],
      },
    },
  },
]

module.exports = {
  entry: {
    app: resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
  // 使用文件缓存，提高二次编译速度
  cache: {
    type: 'filesystem',
  },
  // 将特定依赖排除在打包外
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  // 抽离公共依赖
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: 'all',
        // 第三方模块
        verdors: {
          name: 'verdor', // chunk名称
          test: /node_modules/, // 设置命中目录规则
          priority: 1, // 优先级，数值越大，优先级越高
          minSize: 0, // 小于这个大小的文件，不分割
          minChunks: 1, // 最少复用几次，这里意思是只要用过一次就分割出来
        },
        // 公共模块
        common: {
          name: 'common',
          minChunks: 2, // 只要引用过2次，就分割成公共代码
          priority: 0,
          minSize: 0,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'), // 模板路径
      filename: 'index.html', // 生成的文件
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
    }),
    // 进度条
    new WebpackBar({
      name: isDev ? '正在启动' : '正在打包',
      color: '#52c41a', // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
    // typescript 类型检查
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(__dirname, '../tsconfig.json'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssLoaders(1),
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
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
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      // 处理图片
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      // 处理字体
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      // 处理tsx、js。.jsx 的格式排除在外了，因为我不可能在 ts 环境下建 .jsx 文件，实在要用jsx 语法的时候，用.js
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
    ],
  },
}
