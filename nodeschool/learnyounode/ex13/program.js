/*
* HTTP JSON API server
*
* Write an HTTP server that serves JSON data when it receives a GET request
* to the path '/api/parsetime'. Expect the request to contain a query string
* with a key 'iso' and an ISO-format time as the value.

* For example: /api/parsetime?iso=2013-08-10T12:10:15.474Z
* The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
*
* {
*
*   "hour": 14,
*   "minute": 23,
*   "second": 15
* }
*
* Add second endpoint for the path '/api/unixtime' which accepts the same
* query string but returns UNIX epoch time in milliseconds (the number of
* milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
*
* For example: { "unixtime": 1376136615474 }
* Your server should listen on the port provided by the first argument to
* your program.
*/

var http = require('http');
var map = require('through2-map');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  // call the request handler
  var response = handleRequest(req);
  // set the headers and return the response
  res.writeHead(200, {'content-type':'application/json'});
  res.end(response);
});

server.listen(port);

function parseTime(datetime){
  // parse the time into a useful object
  var date = new Date(datetime);
  return {
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  };
}

function unixtime(datetime){
  // return the unix timestamp
  var date = new Date(datetime);
  return {"unixtime": date.getTime()};
}

function handleRequest(req){
  // handle the request for different endpoints
  var r = url.parse(req.url, true);
  var dt = r.query.iso;
  var data = "";

  if (r.pathname == "/api/parsetime")
    data = parseTime(dt);
  if (r.pathname == "/api/unixtime")
    data = unixtime(dt);
  //return a json string
  return JSON.stringify(data);
}
