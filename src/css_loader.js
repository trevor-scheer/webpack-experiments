// Shim the css_loader styles.hoc for example
const cssLoader = {
  loadSass(name) {
    return {
      hoc: Component => {
        console.log(`shimmed style hoc for ${name}`);
        return Component;
      }
    };
  }
};

module.exports = cssLoader;
