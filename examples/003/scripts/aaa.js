// aaa.js
var x = 5;
var addX = function(value) { // 3
  return value + x;
};
module.exports.x = x; // 1
module.exports.addX = addX; // 2

/* 
everything in this module is private: 
cannot be accessed by another file

To make a thing public you must expose it:
1) assign x to another x and expose it
2) assign addX to another addX and expose it
3) addX shall be a function that takes 1 parameter 'value'


*/