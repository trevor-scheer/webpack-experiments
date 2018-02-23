module.exports = function(source, map) {
  if (this.resourceQuery) {
    const name = this.resourceQuery.slice().replace('?', '');
    return `
          import cssLoader from 'css_loader';
          export default cssLoader.loadSass('${name}');
        `;
  } else {
    // Bad import request, give em a pass through w/no styles
    return `
          console.error('Bad styles import. Check your styles! or @styles imports.');
          const identity = {
            hoc: Component => Component
          };
          export default identity;
        `;
  }
};
