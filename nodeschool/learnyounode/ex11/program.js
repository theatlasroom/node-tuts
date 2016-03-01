/*
* HTTP File Server
*
* Write an HTTP server that serves the same text file for each request it
* receives.
*
* Your server should listen on the port provided by the first argument to
* your program.
*
* You will be provided with the location of the file to serve as the second
* command-line argument. You must use the fs.createReadStream() method to
* stream the file contents to the response.
*/

var http = require('http');
var fs = require('fs');

var port = process.argv[2]; // get the port number from the command line args
var file = process.argv[3]; // the file to serve

var server = http.createServer(function(req, res){
  // stream the file to the client
  var stream = fs.createReadStream(file);
  res.writeHead(200, { 'content-type': 'text/plain' });
  stream.pipe(res);
});

// start our server
server.listen(port);
