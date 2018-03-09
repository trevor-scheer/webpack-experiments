define('wf', [], function() {
  let _global = typeof window === 'undefined' ? global : window;
  _global.wf = {
    features: {
      feature1: true,
      feature2: false,
      feature3: true,
      feature4: false,
      libra: {
        test1: true,
        test2: false
      }
    }
  };

  return _global.wf;
});
