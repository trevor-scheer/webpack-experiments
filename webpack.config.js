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
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),

      // Webpack can't resolve the css_loader without this :thinking_face:
      path.resolve(__dirname, 'src')
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/@feature/, function(resource) {
      resource.request = resource.request.replace(/@feature\//, 'feature!?');
    }),
    new webpack.NormalModuleReplacementPlugin(/@libra/, function(resource) {
      resource.request = resource.request.replace(/@libra\//, 'libra!?');
    }),
    new webpack.NormalModuleReplacementPlugin(/@styles/, function(resource) {
      resource.request = resource.request.replace(/@styles\//, 'styles!?');
    }),
    new webpack.NormalModuleReplacementPlugin(/styles!\.\//, function(
      resource
    ) {
      resource.request = resource.request.replace(/styles!\.\//, 'styles!?');
    })
  ]
};
