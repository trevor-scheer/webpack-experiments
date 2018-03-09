define(
  'amd-module',
  ['feature!?feature1', '@feature/feature2', 'libra!?test1', '@libra/test2'],
  function(feature1, feature2, test1, test2) {
    console.log(feature1, 'feature1 from amd module');
    console.log(feature2, 'feature2 from amd module');
    console.log(test1, 'feature1 from amd module with libra!');
    console.log(test2, 'feature2 from amd module with @libra');
  }
);
