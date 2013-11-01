require(["printer"],function(printer){ // 1
  var retval = "";
  retval = printer.printOut();             // 2
  document.getElementById('bag').innerHTML  = retval;
});