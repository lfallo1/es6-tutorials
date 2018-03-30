// --- example #1
// import {keyValue as key, test} from './external.js'
// import someDefaultExport from './external.js';

// console.log(`key value: ${key}`);
// test();
// console.log(`key value: ${key}`);
// console.log(someDefaultExport);

// --- example #2
import * as external from './external.js';

console.log(external);
console.log(`key value: ${external.keyValue}`);
external.test();
console.log(`key value: ${external.keyValue}`);
console.log(external.default);