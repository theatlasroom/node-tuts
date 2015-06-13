/**
* outputs the arguments passed in from the console
*/

process.argv.forEach(function(val, index){
  console.log(index + ': ' + val);
});
