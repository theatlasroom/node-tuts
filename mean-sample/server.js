var express = require('express'),
  morgan = require('morgan'), // logging middleware
  fs = require('fs'), // static middleware
  app = express(),
  port = process.env.PORT || 3000,
  testMode = false;


app.use(morgan('dev'));

// middleware to check for test mode
app.use(function(req, res, next){
  if (req.url == '/test'){
    console.log('Enabling test mode');
    testMode = true;
  }

  next();
});

// Basic middleware to send hello world response
app.use(function(req, res){
  var data =
  testMode ?
  JSON.stringify(req.headers)  :
  '<h1>Hello world</h1>';

  var contentType = testMode ? 'text/plain' : 'text/html';

  res.writeHead(200, {'Content-Type':contentType});
  res.end(data);
});

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/views/index.html');
});*/

app.listen(port, function(){
  console.log("Server started on port %s", port);
});
