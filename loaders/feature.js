// Using module.exports down below to support AMD + ES6 modules simultaneously.
// ES6 default export results in an object w/a default key when importing to AMD
// {default: true/false}
module.exports = function(source, map) {
  if (this.resourceQuery) {
    const name = this.resourceQuery.slice().replace('?', '');
    return `
      let _global = typeof window === 'undefined' ? global : window;
      module.exports = _global.wf ? _global.wf.appData.features.${name} : false;
    `;
  } else {
    return `
      module.exports = false;
    `;
  }
};
