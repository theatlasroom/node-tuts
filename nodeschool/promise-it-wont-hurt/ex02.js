/*
 * Create a promise, have it fulfilled with a value of 'FULFILLED!' after a delay of 300ms using setTimeout
 * Print the contents of thepromise after it has been fulfilled passing console.log to then.
 */

var promise = new Promise(function(fulfill, reject){
  setTimeout(function(){
    fulfill("FULFILLED!");
  }, 300);
});

promise.then(console.log);
