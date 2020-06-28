const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'
    ]
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'Build SandBox',
        buildTime: new Date().toString(),
        template: 'index.html'
      })
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name]-[hash:7].css'
        })
      )
    }

    return plugins
  }

  return {
    mode: isProd ? 'production' : isDev && 'development',

    output: {
      filename: isProd ? '[name]-[hash:7].js' : undefined
    },

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
          use: getStyleLoaders()
        },

        // SCSS or SASS
        {
          test: /\.s[ca]ss$/,
          // если у лоадера нет доп опций, можно передавать только его имя
          use: [
            ... getStyleLoaders(),
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

    plugins: getPlugins(),

    devServer: {
      open: true,
    }
  }
};