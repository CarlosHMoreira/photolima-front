##Setup React boilerplate

Basically we need to:

 - Install webpack tools
 - install Babel tools
 - Configure webpack and babel
 - Install react stuff
 - include resulting bundle into html
 - setup webpack dev server

Run ``npm i -D webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader``

Add the npm script build in the package.json ``"build": "webpack --mode production"``.

Then will be needed babel to transpile React stuff like jsx to ES6+ then from ES6+ to ES5.

So, run ``npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react``

Create a file named *.babelrc* inside the project folter with the following content

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Create a file named webpack.config.js with the following content
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```
Wich basically means, get all files with extension js or jsx and transpile using babel-loader.

At this point you can already create some componente and run ``npm run build`` and serach for a folder named dist with you code transpiled.

create a index.html file to use as template, so we can generate a new one with our script injected.

run ``npm i -D html-webpack-plugin``

then update adds the plugin in webpack.config.js, should be like this

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ]
};
```
if you build now should have a index.html in the dist folder.

Now to setup *webpack-dev-server * run ``npm i -D webpack-dev-server``
and in the npm script add the following content

```json
{
    "start": "webpack-dev-server --open --mode development --progress",
}
```

and add the devServer config in webpack.config.json, should looks like this now
```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
```
now when run ``npm start`` you already should have you dev envronment up.

To enable sourcemap adds de devtool config in webpack.config.json, check the documentation do see wich options is better for your scenario.

