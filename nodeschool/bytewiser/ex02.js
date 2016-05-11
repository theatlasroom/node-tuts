/*
 * Read an unknown number of bytes via process.argv
 * Create a buffer from the input
 * Output a hexadecimal representation of the buffer
 */

var bytes = process.argv;
// discard the first 2 elems as that is just the node instance and the program running
var buf = new Buffer(bytes.slice(2));
console.log(buf.toString('hex'));
