// sum.js
function sum(a, b) {
    return a + b;
  }
  
  module.exports = sum;
  // sum.test.js
const sum = require('./sum');  // Import the function to test

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);  // The test case
});
