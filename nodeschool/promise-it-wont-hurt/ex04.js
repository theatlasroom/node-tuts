/*
 * Create a promise that after a delay of 300ms, rejects with an Error object.
 * The error should be constructed with the paramter 'REJECTED!' which is the message for the error.
 * Create a function onReject to print error.message using console.log, pass this function as a rejection handler to the then method.
 */

function onReject(error){
  console.log(error.message);
}

var promise = new Promise(function(fulfill, reject){
  setTimeout(function(){
    reject(new Error("REJECTED!"));
  }, 300);
});

promise.then(console.log, onReject);
