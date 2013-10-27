require(["printQAobject"],function(printQAobject){ // 1
  var retval = "";
  retval = printQAobject.printOut();             // 2
  document.getElementById('a').innerHTML  = retval;
});