define( ["jsobject"], function( jsobject ) { // 1
  //console.log("Function : printOut");
 
  return { 
    printOut: function() {      // 3
      var object = jsobject.getObject();
      var arrayOfProperties = []; 
      var currentProperty;
      var bag = "";

      for (var prop in object) {
        if (object.hasOwnProperty(prop)) { // 
          arrayOfProperties.push(prop); //box += arrayOfProperties[prop];
        }
      }

      for ( var i = 0; i < arrayOfProperties.length ; i++ ) {
        currentProperty = arrayOfProperties[i];
        bag += '<p class="blue"><b>'+ i + '. ' + currentProperty + "</b></p><p>" + object[currentProperty] + '</p><br>';
      }
      
      return bag;
    } // end printout()
  } // end return
}); // end define

