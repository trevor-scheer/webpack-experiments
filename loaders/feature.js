module.exports = function(source, map) {
  if (this.resourceQuery) {
    const name = this.resourceQuery.slice().replace('?', '');
    return `
      let _global = typeof window === 'undefined' ? global : window;
      export default _global.wf ? _global.wf.appData.features.${name} : false;
    `;
  } else {
    return `
      export default false;
    `;
  }
};
