/*
* Juggling Async
*
* This problem is the same as the previous problem (HTTP COLLECT) in that
* you need to use http.get(). However, this time you will be provided with
* three URLs as the first three command-line arguments.
*
* You must collect the complete content provided to you by each of the URLs
* and print it to the console (stdout). You don't need to print out the
* length, just the data as a String; one line per URL. The catch is that you
* must print them out in the same order as the URLs are provided to you as
* command-line arguments.
*
*/

var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var data_streams = [];
var completed_requests = 0;

function callback(data_arr){
  data_arr.forEach(function(data){
    console.log(data);
  });
}

// iterate over the urls and make a request
urls.forEach(function(url, index){
  data_streams.push(""); // new blank string on the array

  // shoot off a get request
  http.get(url, function(response){
    // return a string baby
    response.setEncoding('utf8');

    // handle errors
    response.on("error", function(error){
      console.error("There was a problem", error);
    });

    response.on("data", function(data){
      // add the new data on the stream
      data_streams[index] += data;
    });

    // have we finished?
    response.on("end", function(){
      completed_requests++;
      if (completed_requests === urls.length)
        callback(data_streams);
    });
  });
});
