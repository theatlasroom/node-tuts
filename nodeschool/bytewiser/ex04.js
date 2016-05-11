/*
 * The argument at process.argv[2] will be a path to a file
 * Read the file and split it by new line characters
 * Log one buffer per line
 */

var fs = require('fs');
var filepath = process.argv[2];
//console.log(filepath);

fs.readFile(filepath, function(err, data){
  if (err) throw Error("WTF? - file not found m8");

  var NL = "\n".charCodeAt(0);
  var buff = new Buffer(data);
  //console.log("*******BUFFER*******");
  //console.log(buff.toString());
  var lines = [];
  //console.log(buff.length);
  var startindex = 0;
  for (var i=0;i<buff.length;i++){
    // if we find a new line character, then copy bytes to the buffer
    if (buff[i] === NL){
      lines.push(buff.slice(startindex, i));
      i++; // skip over the NL char
      startindex = i;
    }  
  }
  if (startindex < buff.length) lines.push(buff.slice(startindex, buff.length));

  //console.log("*****OUTPUT*****");
  for (var i in lines)
    console.log(lines[i]);
});
