/*
 * Take the integer from process.argv[2] and write it as the first element in a single element Uint32Array.
 * Create a Uint16Array from the array buffer of the Uint32Array
 * Log the JSON Stringified version of the Uint16Array
 */

var buffer = new Uint32Array([Number(process.argv[2])]);
var u16 = new Uint16Array(buffer.buffer);
console.log(JSON.stringify(u16));
