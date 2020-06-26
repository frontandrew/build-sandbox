module.exports = {
  mode: "development",

  module: {
    rules: [

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', }
        ]
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },

      // SCSS or SASS
      {
        test: /\.s[ca]ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
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
  }
};