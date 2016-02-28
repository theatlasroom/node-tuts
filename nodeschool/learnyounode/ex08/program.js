/*
* HTTP Collect
*
* Write a program that performs an HTTP GET request to a URL provided to you
* as the first command-line argument. Write the String contents of each
* "data" event from the response to a new line on the console (stdout).
*
*/

var http = require('http');
var url = process.argv[2];

// make the http get request to the url specified
http.get(url, callback);

// handle the callback
function callback(response){
  var data_stream = "";
  response.setEncoding('utf8');

  response.on('error', function(error){
    console.error("There was an error", error);
  });

  response.on('data', function(data){
    // add the new data to the data stream
    data_stream += data;
  });

  response.on('end', function(){
    // output the number of characters returned from the server
    console.log(Number(data_stream.length));

    // output the string of characters
    console.log(data_stream);
  });
}
