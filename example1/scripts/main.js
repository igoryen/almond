require(["purchase"],function(purchase){ // 1
  var retval = "";
  retval = purchase.purchaseProduct();             // 2
  document.getElementById('a').innerHTML  = retval;
});

/*
  1) require file purchase.js; pass module purchase.js to the anonymous function
  2) call the module purchase.js / purchaseProduct()

Q: What is this file used for?
A: For initialization
*/
// var result = purchaseProduct();
