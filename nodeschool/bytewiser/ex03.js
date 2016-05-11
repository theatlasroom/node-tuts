/*
 * Write a program that takes the first buffer written to process.stdin, 
 * updates each instance of . with ! and then logs out the updated buffer.
 */

// process.stdin returns a stream
process.stdin.on('data', function(bytes){
  var buf = new Buffer(bytes, 'ascii');
  for (var i=0;i<buf.length;i++){
    if (Number(buf[i]) === 46) buf[i] = Number(33);
  }
  console.log(buf);
});

