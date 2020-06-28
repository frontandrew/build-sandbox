const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",

  module: {
    rules: [

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // упрощеный синтаксис блока 'use'
      },

      // CSS
      {
        test: /\.css$/,        
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ]
      },

      // SCSS or SASS
      {
        test: /\.s[ca]ss$/,
        // если у лоадера нет доп опций, можно передавать только его имя
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },

      // Images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },

      // Fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Build SandBox',
      buildTime: new Date().toString(),
      template: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: '[name]-[hash:7].css'
    }),
  ]
};