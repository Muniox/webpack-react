const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      'babel-runtime': 'babel-runtime-corejs3',
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: ['autoprefixer'] } },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { 
              "useBuiltIns": "usage",
              "corejs": "3.22.3",
              // "targets": {
              //   "browsers": [
              //     "edge >= 18",
              //     "safari >= 11.1",
              //     "firefox >= 60",
              //     "ie >= 11",
              //     "ios >= 9",
              //     "chrome >= 67"
              //   ]
              // }
            }], '@babel/preset-react']
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      exclude: ['node_modules', 'dist'],
      fix: true
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    // new BundleAnalyzerPlugin()
  ],
};
