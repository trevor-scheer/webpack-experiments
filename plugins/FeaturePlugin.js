// DON'T NEED, KEEPING FOR REFERENCE

const path = require('path');

class FeatureWebpackPlugin {
  constructor(opts) {
    this.shimPath = opts.shimPath;
  }

  apply(compiler) {
    const self = this;
    compiler.plugin('after-resolvers', function(compiler) {
      compiler.resolvers.normal.plugin('resolve', function(request, callback) {
        if (request.request.match(/@feature/)) {
          const req = Object.assign(request, {
            path: self.shimPath
          });

          this.doResolve(['file'], req, 'shimming feature', callback);
        } else {
          callback();
        }
      });
    });
  }
}

module.exports = FeatureWebpackPlugin;
