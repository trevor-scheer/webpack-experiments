import wf from './wf';
import feature1 from '@feature/feature1';
import feature2 from 'feature!?feature2';
import test1 from '@libra/test1';
import test2 from 'libra!?test2';
import amdModuleSadness from './amd-module';

console.log(feature1, 'feature1 from es6 module with libra!');
console.log(feature2, 'feature2 from es6 module with libra!');
console.log(test1, 'test1 from es6 module with libra!');
console.log(test2, 'test2 from es6 module with @libra');
