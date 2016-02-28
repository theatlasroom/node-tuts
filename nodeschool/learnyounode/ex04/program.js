/*
* Async IO
*
* Write a program that uses a single asynchronous filesystem operation to
* read a file and print the number of newlines it contains to the console
* (stdout), similar to running cat file | wc -l.
*
* The full path to the file to read will be provided as the first
* command-line argument.
*
*/

var fs = require('fs');

// get the file path
var file = process.argv[2];

function cb(buffer){
  // split the string buffer by new line characters
  buffer = buffer.split('\n');

  // count the number of newlines and output
  var new_lines = buffer.length-1;
  console.log(new_lines);
}

// read the file, convert it to a String then call the callback
fs.readFile(file, "utf-8", function(err, buffer){
  cb(buffer);
});
