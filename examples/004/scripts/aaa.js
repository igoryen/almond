// aaa.js

module.exports = function() {
  var bbb = require( "./bbb" );
  return {
    printObject: function(obj) {
      var object = bbb.getObject();
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
};

//document.getElementById('a').innerHTML =  bbb; // why doesn't this work?
