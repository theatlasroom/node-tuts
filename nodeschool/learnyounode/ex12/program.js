/*
* HTTP UPPERCASER
*
* Write an HTTP server that receives only POST requests and converts
* incoming POST body characters to upper-case and returns it to the client.
*
* Your server should listen on the port provided by the first argument to
* your program.
*/

var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

function upperCaser(chunk){
  return chunk.toString().toUpperCase();
}

var server = http.createServer(function(req, res){
  if (req.method != 'POST') return res.end('Request method not accepted');
  // Convert POST body characters to upper case and return them to the client
  // send our response
  res.writeHead(200, { 'content-type': 'text/plain' });
  req.pipe(map(upperCaser)).pipe(res);
});

server.listen(port);
