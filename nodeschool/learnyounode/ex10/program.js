/*
* Write a TCP time server!
*
* Your server should listen to TCP connections on the port provided by the
* first argument to your program. For each connection you must write the
* current date & 24 hour time in the format:
*
* "YYYY-MM-DD hh:mm"
*
* followed by a newline character. Month, day, hour and minute must be
* zero-filled to 2 integers. For example:
*
* "2013-07-06 17:42"
*
* After sending the string, close the connection.
*/

var net = require('net'); // add the net package
var port = process.argv[2]; // get the first argument

// create the TCP server
var server = net.createServer(handleConnection);
server.listen(port);

// callback to process a new server connection
function handleConnection(socket){
  var d = new Date();
  var formatted = d.getFullYear() + "-" + padWithZero(d.getMonth()+1) + "-" + padWithZero(d.getDate()) + " " + padWithZero(d.getHours()) + ":" + padWithZero(d.getMinutes()) + "\n";
  socket.write(formatted);
  socket.end();
}

function padWithZero(num){
  return (num < 10) ? "0"+num : num;
}
