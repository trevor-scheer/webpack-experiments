define('wf', [], function() {
  let _global = typeof window === 'undefined' ? global : window;
  _global.wf = {
    libra: {
      test1: true,
      test2: false
    }
  };

  return _global.wf;
});
