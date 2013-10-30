//main.js
//var aaa = require("./aaa");

require(["bbb"],function(bbb){ // 1
  var object = require("links.json");
  var bag = bbb(object);        // 2
  document.getElementById('a').innerHTML  = retval;
});