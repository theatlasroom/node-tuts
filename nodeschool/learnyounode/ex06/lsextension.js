var fs = require("fs");
var path = require("path");

function lsextension(dir, ext, callback){
  // read the files in the directory
  fs.readdir(dir, function(err, data){
    if (err) return callback(err); // bail early

    var files = [];
    ext = "." + ext; // add the dot before the file extension

    // filter the list of files by the extension that was passed
    for(var i=0;i<data.length;i++)
      if (path.extname(data[i]) === ext) files.push(data[i]);

    // call the callback with the results
    callback(null, files);
  });
}

// return the function as a module
module.exports = lsextension;
