const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isDevelopment ? 'inline-source-map' : 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // transpile js and jsx to ES5 using babel
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      ui: path.resolve(__dirname, 'src', 'ui'),
      components: path.resolve(__dirname, 'src', 'components'),
      layouts: path.resolve(__dirname, 'src', 'layouts'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      store: path.resolve(__dirname, 'src', 'store'),
      helpers: path.resolve(__dirname, 'src', 'helpers'),
      images: path.resolve(__dirname, 'src', 'assets', 'images'),
      fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      lang: 'pt-br',
      dir: 'ltr',
      template: 'index.html', // Uses root index.html as template to inject transpiled code
    }),
  ],
  devServer: {
    // Enable gzip compression for everything served
    compress: true,
    // index.html page will likely have to be served in place of any 404 responses
    historyApiFallback: true,
    port: 3000,
  },
};
