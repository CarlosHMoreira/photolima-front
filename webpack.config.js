const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isDevelopment ? 'inline-source-map' : 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"  // transpile js and jsx to ES5 using babel
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Uses root index.html as template to inject transpiled code
    }),
  ],
  devServer: {
    compress: true, // Enable gzip compression for everything served
    historyApiFallback: true, //index.html page will likely have to be served in place of any 404 responses
    port: 3000
  }
};
