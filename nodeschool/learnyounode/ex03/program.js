/*
* Synchronous IO
*
* Write a program that uses a single synchronous filesystem operation to
* read a file and print the number of newlines (\n) it contains to the
* console (stdout), similar to running cat file | wc -l.
*
* The full path to the file to read will be provided as the first
* command-line argument (i.e., process.argv[2]). You do not need to make
* your own test file.
*/

var fs = require('fs');

// get the file path
var file = process.argv[2];

// get the buffer and convert it to a string
var buffer = fs.readFileSync(file);
buffer = buffer.toString();

// split the string buffer by the new line character
/*
* count the number of elements and subtract 1 - Note that the test
* Note: file does not have a newline character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more element than the number of newlines.
*/

buffer = buffer.split('\n');

var new_lines = buffer.length-1;
console.log(new_lines);
