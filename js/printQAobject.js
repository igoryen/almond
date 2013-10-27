define( ["jsmoduleloadersqa"], function( jsmoduleloadersqa ) { // 1
  console.log("Function : purchaseProduct");
 
  return { 
    printOut: function() {      // 3
      var object = jsmoduleloadersqa.getObject();
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
    } // end printout()
  } // end return
}); // end define

