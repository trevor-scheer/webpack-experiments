const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].chunk.js'
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/@feature/, function(resource) {
      resource.request = resource.request.replace(/@feature\//, 'feature!?');
    }),
    new webpack.NormalModuleReplacementPlugin(/@libra/, function(resource) {
      resource.request = resource.request.replace(/@libra\//, 'libra!?');
    })
  ]
};
