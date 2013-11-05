//app.js
require(['calculator/add', 'calculator/subtract', 'calculator/multiply', 'calculator/divide', 'calculator/square' ], 
function(add, sub, mul, div, squ){ // 20, 30
  console.log(add(2,2));
  console.log(sub(10,5));
  console.log(mul(3, 3));
  console.log(div(12, 3));
  console.log(squ(5));
});