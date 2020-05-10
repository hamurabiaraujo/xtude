var assert = require('assert');
var functions = require('../index');

describe('Functions', function() {
  describe('sum()', function() {
    it('should calc the sum', function() {
      assert(4, functions.sum(2, 2));
      assert(5, functions.sum(3, 2));
      assert('OK', functions.sum('O','K'));
      assert.notEqual(10, functions.square(5, 6));
    });
  });

  describe('square()', function() {
    it('should calc the square', function() {
      assert(4, functions.square(2));
      assert(9, functions.square(3));
      assert(81, functions.square(9));
      assert.notEqual(5, functions.square(2));
    });
  });
});