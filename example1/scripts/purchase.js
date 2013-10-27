define( ["credits","products"], function( credits, products ) { // 1
  
  console.log("Function : purchaseProduct");
 
  return {                             // 2
    purchaseProduct: function() {      // 3
 
      var credit = credits.getCredits(); // 4
      if(credit > 0){
        products.reserveProduct();   // 5
        return "yes";
      }
      return "no";
    }
  }
});

/*
function purchaseProduct(){
  console.log("Function : purchaseProduct");
 
  var credits = getCredits();
  if(credits > 0){
    reserveProduct();
    return true;
  }
  return false;
}
*/

/*
1) purchase functionality depends on modules credits.js and products.js. 
2) Inside the return statement, we can define the functions of each module. 
3) purchaseProduct will be a function  (0 parameters)
4) call: credits.js / getCredits() on the objects passed. 
5) call: products.js / reserveProduct() on the objects passed. 
*/