define(function(products) { // 1
  return {
    reserveProduct: function() { // 2

      console.log("Function : reserveProduct");
 
      return true; // 3
    }
  }
});

/*
function reserveProduct(){
  console.log("Function : reserveProduct");
 
  return true;
}
*/

/*
This file is configured as an independent module – meaning it is not dependent on anything. 
The important thing to notice is the use of define() instead of require(). 
Choosing between require() or define() depends on the structure of your code, 
and will be discussed in the following section.

1) make this file into a function that receives -products-
2) the nested function  (0 parameters)
3) this nested function returns -true-


*/