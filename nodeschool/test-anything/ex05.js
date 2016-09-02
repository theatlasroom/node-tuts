/*
* # To err is human
* A function feedCat takes any kind of food as a String argument and returns
*
* 'yum' for everything you feed them. However if you try to feed the cat
* 'chocolate', the function will throw an error.
*
* Write a tests for this behavior, to be sure no kittens are harmed.
*
* The function will be provided through process.argv[2].
*/

const test = require('tape');
const feedCat = require(process.argv[2]);

/*
Suggested solution

test('An error should be thrown if the cat is fed chocolate', function(t){
  t.test(function(ts){
    ts.throws(function(){
      feedCat('chocolate');
    });
    ts.end();
  });

  t.test(function(ts){
    ts.equal(feedCat("salmon"), "yum");
    ts.end();
  });
});
*/

test('An error should be thrown if the cat is fed chocolate', function(t){
  t.test(function(ts){
    ts.throws(function(){
      feedCat('chocolate');
    });
    ts.end();
  });

  t.test(function(ts){
    ts.equal(feedCat("salmon"), "yum");
    ts.end();
  });
});
