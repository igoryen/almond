
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
     "append()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#append(boolean)"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#length()"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#length()"
   , "Reflection API": "http://docs.oracle.com/javase/tutorial/reflect/"
   , "stringBuffer":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html"
   , "substring()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#substring(int)"
   , "JAXB - Wikipedia": "http://en.wikipedia.org/wiki/Java_Architecture_for_XML_Binding"
   , "JAXB Project": "https://java.net/projects/jaxb/lists"
   , "JAXB Tutorial": "https://jaxb.java.net/tutorial/"
   , "XMLSpy - Altova": "http://www.altova.com/xmlspy.html"

  }; // end object

    //----------------------------------------------------------------------------



  
  //----------------------------------------------------------------------------
// this function helps make sort() case-insensitive

function insensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();

  return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);

}
//----------------------------------------------------------------------------





//----------------------------------------------------------------------------
// function to print out a js object

function printObj(obj){

  var keys = [];  // declare variable to put array keys in
  var currentKey,nextKey, f;
  var bag = "";
  var startingLetter = "";

  for (var k in obj){  // for every key in json object 
    if (obj.hasOwnProperty(k)){ // if key has a property 
      keys.push(k);   // put key (and its property) into the -keys- array
    }
  } // end for()

  keys.sort(insensitive); // sort the -keys- array regardless of case





  for (f = 0; f < keys.length; f++) {  // for each of the elements of the -keys- array

    //------------
    if (!keys[f - 1]) {
      bag = "<hr>" + keys[f].charAt(0).toUpperCase() + "<br>";
    }
    //----------------

    startingLetter = "";     // empty the main letter variable

    // assign the current key and the next jey
    currentKey = keys[f]; //console.log('currentKey: '+ currentKey);
    if (keys[f + 1]) {   // if nextKey exists
      nextKey = keys[f + 1]; //console.log('nextKey: ' + nextKey);
    }
    else {

      nextKey = ' ';
    }

    if( currentKey.toLowerCase().charAt(0)  != nextKey.toLowerCase().charAt(0) ){
    //console.log('in if()');
    //console.log(currentKey.charAt(0).toLowerCase() + " vs " + nextKey.charAt(0).toLowerCase());
    startingLetter += "<hr>" + nextKey.toUpperCase().charAt(0) + "<br>";
    //console.log('startingLetter: '+startingLetter);
  }



  bag += '<a href="'+ obj[currentKey] + '" target="_blank">'+ currentKey + '</a><br>';

  bag += startingLetter; // add the letter to the bag

  } // end for()
      return bag; // if you use 'document.write()' the document will have only the contents of the object on white background
}; // end printObj()

//=========================================================================================
 //window.onload = printObj(funnyObj);
 function func (){
  var element = document.getElementById('display_pane');
  element.innerHTML = printObj(object);
 }

 window.onload = func;

