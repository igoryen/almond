//square.js
define(['calculator/multiply'], function(mul) { // 
  return function(x){
    return mul(x, x);
  };
});




