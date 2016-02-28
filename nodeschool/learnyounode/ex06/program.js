/*
* Make it modular
*
* Create a program that prints a list of files in a given directory,
* filtered by the extension of the files. The first argument is the
* directory name and the second argument is the extension filter. Print the
* list of files (one file per line) to the console. You must use
* asynchronous I/O.
*
* You must write a module file to do most of the work. The module must
* export a single function that takes three arguments: the directory name,
* the filename extension string and a callback function, in that order. The
* filename extension argument must be the same as what was passed to your
* program. Don't turn it into a RegExp or prefix with "." or do anything
* except pass it to your module where you can do what you need to make your
* filter work.
*
* These four things are the contract that your module must follow.
*
* - Export a single function that takes exactly the arguments described.
* - Call the callback exactly once with an error or some data as described.
* - Don't change anything else, like global variables or stdout.
* - Handle all the errors that may occur and pass them to the callback.
*/

var ls = require("./lsextension");
var dir = process.argv[2];
var ext = process.argv[3];

function processLS(err, files){
  if (err) return console.error("There was a problem :(", err);

  files.forEach(function(file){
    console.log(file);
  });
}

ls(dir, ext, processLS);
