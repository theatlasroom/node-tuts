/******************************
* Write a passing assertion for the function isCoolNumber, that will assure that
* it returns true when passing 42 in it.
*
* The path of the module exporting the function will be provided through process.argv[2].
*******************************/

const assert = require('assert');
const func = process.argv[2];
const isCoolNumber = require(func);

assert.equal(isCoolNumber(42), true);
