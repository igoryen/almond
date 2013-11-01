// fridge.js

//var exports = {}; // 1

exports.bread = function bread() { // 2
  return 'bread: 2';
};

exports.egg = 'egg: 1'; // 3

/* 
exports = { // 4
              bread: function bread() { ... },
              egg: 'egg: 1'
           };
*/
/*
The author of this example called file a Node.js file.  
1) For clarification that 'exports' is an object. 
2) Don't have to use the same name. Also fine: exports.bread = function wholemealBread() {
4) For clarification: define properties'bread' and 'egg'; assign them to the 'export' object. 
  The 'exports' object is exposed. You can use it in other files by including it
  via require().
*/