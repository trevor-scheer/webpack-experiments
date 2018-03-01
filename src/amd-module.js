define('amd-module', ['libra!?test1', '@libra/test2'], function(test1, test2) {
  console.log(test1, 'feature1 from amd module with libra!');
  console.log(test2, 'feature2 from amd module with @libra');
});
