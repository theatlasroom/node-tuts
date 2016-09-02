/*************************************************************************************
* Write tests that output TAP, that tests the following properties of a function
* fancify. The function will be provided in process.argv[2].
* 1 fancify(str) returns the str wrapped in ~*~
*   Example: fancify('Hello') returns ~*~Hello~*~
* 2 It takes an optional second argument that converts the string into ALLCAPS
*   Example: fancify('Hello', true) returns ~*~HELLO~*~
* 3 It takes a third optional argument that determines the character in the middle
*   Example: fancify('Hello', false, '!') returns ~!~Hello~!~
*************************************************************************************/

const test = require('tape');
const fancify = require(process.argv[2]);

test('fancify returns the string wrapped in ~*~', function(t){
  t.equal(fancify("hello"), "~*~hello~*~");
  t.end();
});


test('fancify returns string in all caps if 2nd param is true', function(t){
  t.equal(fancify("hello", true), "~*~HELLO~*~");
  t.end();
});

test('fancify uses the third param to change the char in the middle', function(t){
  t.equal(fancify("hello", false, "##"), "~##~hello~##~");
  t.end();
});
