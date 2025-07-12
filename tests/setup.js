// load features dari testing library
import '@testing-library/jest-dom';

console.log("test <<<<");


// load polyfill fetch -> untuk emulate fetch api yg ada dibrowser
import 'whatwg-fetch';
console.log("test 2 <<<<");

// Polyfills for Node.js environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
console.log("test 3 <<<<");