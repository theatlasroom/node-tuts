function foo(){
  var bar;
  quux = 20;

  function zip(){
    var quux = 10;
    bar = true;
  }

  return zip;
}
