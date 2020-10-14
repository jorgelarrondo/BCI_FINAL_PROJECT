var assert = require('assert').strict;
const expect = require('chai').expect;
const stringOps = required('../stringOperations');

describe('String operations', function () {
  describe('String length', function () {
    it('should return length of string when given input "hello world"', function () {
      
        //assert.equal(stringOps.length('Hello world'), 11);

        expect(stringOps.length('Hello world')).to.equal(11);
    });

    it('Should return -1 if parameter is not string', function() {
        expect(stringOps.length({})).to.equal(-1);
        expect(stringOps.length(3463)).to.equal(-1);
        expect(stringOps.length(true)).to.equal(-1);
        expect(stringOps.length(null)).to.equal(-1);

        assert.strictEqual(stringOps.length({}), -1);
        assert.strictEqual(stringOps.length(3467), -1);
        assert.strictEqual(stringOps.length(true), -1);
        assert.strictEqual(stringOps.length(null), -1);
    });
    it('Should return -1 if no parameter was given', function() {
        //assert.strictEqual(stringOps.length(), -1);
        expect(stringOps.length()).to.equal(-1);
    })
  });

  describe('Character ocurrance counting', function() {
    it('Correct character ocurrance for a mixed case test string', function() {
      expect(stringOps.characterOcurranceCount(
        "Gmail is a free...",
        "G"
      )).to.equal(0);
    });

    it('Correct character ocurrance for a lower...')
    
  })
});