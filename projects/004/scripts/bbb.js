//bbb.js



define(function(object){
  var object = require("../links.json");
  return{
    printOut: function(){
      var arrayOfProperties = []; 
      var currentProperty;
      var bag = "";

      for (var prop in object) {
        if (object.hasOwnProperty(prop)) { // 
          arrayOfProperties.push(prop); //box += arrayOfProperties[prop];
        }
      }

      for ( var i = 0; i <= arrayOfProperties.length ; i++ ) {
        currentProperty = arrayOfProperties[i];
        bag += '<p><b>'+ i + '. ' + currentProperty + "</b><br>" + object[currentProperty] + '</p>';
      } 
      return bag;  
    }
  };
});
 // end module

/*
var realExports = exports; // 1
realExports.height = 42; 

var exports = {}; // 2
exports.weight = 43; // 3

var x = 10;
var y = 20;
module.exports = {x: x, y: y};
*/

/*
1) If you re-assign the exports variable to a new object, you basically lose access to the global exports object that node.js provided for you.
2) 
3) height will be there but weight will not. 
    Now, what you can do is assign module.exports to be an object, and that is the object that will be returned when another module requires your module. So you will see things like.
*/