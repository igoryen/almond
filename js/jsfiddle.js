
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "button 1": "http://jsfiddle.net/igoryen/pUeue/1102/"
    , "button CSS": "http://jsfiddle.net/terkel/ap8vT/" 
    , "Date": "http://jsfiddle.net/igoryen/xsKT8/"
    , "Dialog window": "http://jsfiddle.net/igoryen/Z3R7X/"
    , "prompt 1": "http://jsfiddle.net/igoryen/v5MGS/"
    , "fadein-delay-fadeout": "http://jsfiddle.net/igoryen/J83H8/4/"
    , "forEach 1": "http://jsfiddle.net/igoryen/KCU4v/3/"
    , "hasOwnProperty()": "http://jsfiddle.net/igoryen/n86Jw/"  // if it's just 'hasOwnProperty', then error: Uncaught TypeError: Property 'hasOwnProperty' of object #<Object> is not a function 
    , "Hello {{name}} - ng": "http://jsfiddle.net/igoryen/6UT9M/"
    , "Hello World! 1": "http://jsfiddle.net/igoryen/3pEyA/"
    , "Hello World! 2":"http://jsfiddle.net/igoryen/3pEyA/1/"
    , "Hello World! 3":"http://jsfiddle.net/igoryen/3pEyA/2/"
    , "Hello World! 4":"http://jsfiddle.net/praveen_prasad/XNJxT/14/"
    , "innerHTML": "http://jsfiddle.net/igoryen/Ajm9t/1/"
    , "JS Fiddle Tutorial": "http://doc.jsfiddle.net/tutorial.html"
    , "JS Fiddle": "http://jsfiddle.net/"
    , "keydown() 1" : "http://jsfiddle.net/igoryen/Nr9PB/"
    , "keydown() 2": "http://jsfiddle.net/igoryen/Nr9PB/2/"
    , "keyup() 1" : "http://jsfiddle.net/igoryen/H3FSf/"
    , "keyup() 2" : "http://jsfiddle.net/igoryen/JJDnF/2/"
    , "Links Sorter": "http://jsfiddle.net/igoryen/VHzyf/"
    , "List": "http://jsfiddle.net/rniemeyer/bxfXd/"
    , "loop breaking": "http://jsfiddle.net/igoryen/reZdZ/"
    , "marquee": "http://jsfiddle.net/igoryen/V3VNR/"
    , "placeholder in input": "http://jsfiddle.net/igoryen/Atrar/"
    , "Popcorn": "http://jsfiddle.net/rwaldron/xhXE6/"  
    , "print out js objects props and values": "http://jsfiddle.net/igoryen/Ju44N/1/"
    , "printing an array": "http://jsfiddle.net/igoryen/wjj2j/1/"
    , "randomize checkboxes": "http://jsfiddle.net/igoryen/nGxVU/"
    , "randomize radio buttons": "http://jsfiddle.net/igoryen/nGxVU/"
    , "shuffle()": "http://jsfiddle.net/igoryen/KMDej/"
    , "shuffle(array)": "http://jsfiddle.net/igoryen/KMDej/"
    , "Todo - ng": "http://jsfiddle.net/igoryen/TKCvF/"
    , "toUTCString()": "http://jsfiddle.net/igoryen/hc9YK/"

    
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

