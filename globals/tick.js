/**
* Example of the process.nextTick function
* - Schedules a callback to be called on the next time through the event loop
*/

console.log('start');
process.nextTick(function(){
  console.log('nextTick callback');
});
console.log("scheduled");
