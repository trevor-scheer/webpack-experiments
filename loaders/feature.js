// Using module.exports down below to support AMD + ES6 modules simultaneously.
// ES6 default export results in an object w/a default key when importing to AMD
// {default: true/false}
module.exports = function(source, map) {
  if (this.resourceQuery) {
    const key = this.resourceQuery.slice().replace('?', '');
    return `
      define('${this.resourceQuery}', [], function() {
        let _g = typeof window === 'undefined' ? global : window;
        return (
          !!(_g && _g.wf && _g.wf.features && _g.wf.features.${key}) || false
        );
      });
    `;
  } else {
    return `
      module.exports = false;
    `;
  }
};
