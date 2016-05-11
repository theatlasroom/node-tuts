/*
 * Read the first buffer from process.stdin, copy all the bytes into a Uint8Array
 * then log out a JSON stringified representation of the array
 */

process.stdin.once('data', function(chunk){
  if (chunk !== null){
    var ta = new Uint8Array(chunk);
    console.log(JSON.stringify(ta));
  }
});

