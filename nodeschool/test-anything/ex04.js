/***************************************************************************
* Call me maybe
* Write a test for a function repeatCallback(n, cb), that calls the callback
* cb exactly n times.
*
* As before the functions location will be provided through process.argv[2].
***************************************************************************/

const test = require('tape');
const repeatCallback = require(process.argv[2]);

test('Repeat callback should call callback `cb` exactly `n` times', function(t){
  const n  = 5;
  t.plan(5);

  repeatCallback(n, function(){
    t.pass('Callback called');
  })
});
