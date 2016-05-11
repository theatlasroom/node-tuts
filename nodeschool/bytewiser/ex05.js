/*
 * Write a program that combines all of the buffers from process.stdin
 * Write all the input into a single big buffer that is output to the console
 */

var buffers = [];

// when there is new data, concat it to the buffer
process.stdin.on('data', function(new_data){
  //console.log("New data");
  if (new_data !== null)
    buffers.push(new_data);
});

// when the stream closes, then output the buffers contents
process.stdin.on('end', function(){
  //console.log("END");
  console.log(Buffer.concat(buffers));
});
