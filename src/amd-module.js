define('amd-module', ['feature!?feature1', '@feature/feature2'], function(
  feature1,
  feature2
) {
  console.log(feature1, 'feature1 from amd module');
  console.log(feature2, 'feature2 from amd module');
});
