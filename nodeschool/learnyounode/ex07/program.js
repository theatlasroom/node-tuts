/*
* HTTP Client
*
* Write a program that performs an HTTP GET request to a URL provided to you
* as the first command-line argument. Write the String contents of each
* "data" event from the response to a new line on the console (stdout).
*
*/

var http = require("http");
var url = process.argv[2];

// send a GET to the url and invoke a callback on completion
var response = http.get(url, callback);

function callback(response){
  response.setEncoding("utf8");

  // listen for the data event
  response.on("data", function(data){
    console.log(data);
  });

  response.on("error", function(error){
    console.error("There was a problem", error);
  });
}
