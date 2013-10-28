// main.js

var aaa = require('./aaa');
document.getElementById('a').innerHTML = aaa.x;
document.getElementById('b').innerHTML = aaa.addX(10);

console.log("Adding %d to 10 gives us %d", aaa.x, aaa.addX(10));

