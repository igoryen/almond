// make_sandwich.js

var fridge = require('./fridge'); // 1

function makeSandwich() {
  return {
    sandwich: fridge.bread() + ' ' + fridge.egg
  };
}

console.log(makeSandwich());
document.getElementById('a').innerHTML = makeSandwich();
// => { sandwich: 'bread: 2 egg: 1' }
/*
1) include fridge.js at the same address. 
  require() returns the 'exports' object defined in the other file.
  The variable fridge has the properties defined in the 'exports' object.

*/