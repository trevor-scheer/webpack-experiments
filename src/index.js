import wf from './wf';

import test1 from '@libra/test1';
import test2 from 'libra!?test2';
import amdModuleSadness from './amd-module';

console.log(test1, 'feature1 from es6 module with libra!');
console.log(test2, 'feature2 from es6 module with @libra');
