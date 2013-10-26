define('printobject', function (object) {  // identifier of the module, factory function

  var arrayOfProperties = []; 
  var currentProperty;
  var bag = "";
  var box = "";

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

