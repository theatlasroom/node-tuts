//module.exports = function(n){
//  return n !== 42;
//}

//module.exports = function(str, allcaps, char){
  // updated for the fancify function
  //if(allcaps) str = str.toUpperCase();
  //char = char || '*';
  //return '~' + char + '~' + str + '~' + char + '~';
//}

//module.exports = function repeatCallback (n, cb) {
   //if(n < 1) return;
   //cb();
   //repeatCallback(n - 1, cb);
 //}

 module.exports = function feedCat(food){
   if (food.toLowerCase() == 'chocolate') throw new Error("Don't feed cats chocolate - not good!");
   return "yum";
 }
