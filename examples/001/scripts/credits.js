define(function() { // 1
  console.log("Function : getCredits");
 
  return { // 2
    getCredits: function() { // 3
      var credits = "100";
      //var credits = "-100";

      return credits;
    }
  }
});

/*
function getCredits(){
  console.log("Function : getCredits");
 
  var credits = "100";
  return credits;
}
*/

/*
This file is configured as an independent modules – meaning it is not dependent on anything. 
The important thing to notice is the use of define() instead of require(). 
Choosing between require() or define() depends on the structure of your code, 
and will be discussed in the following section.

1) make this .js file into a function
2) this function returns the following
3) this function has the following nested function (0 parameters)
*/


