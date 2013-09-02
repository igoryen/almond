
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
    "Case insensitive sort": "http://stackoverflow.com/questions/14308786/custom-case-insensitive-sort-function-that-retains-original-casing"
    , "Date": "http://www.w3schools.com/js/js_obj_date.asp"
    , "display a clock": "http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock"
    , "Essential trainiung": "http://www.lynda.com/JavaScript-tutorials/Essential-Training-2011/81266-2.html"
    , "getDay()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_weekday"
    , "getFullYear()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getfullyear"
    , "getTime()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime"
    , "Google Hosted Libraries": "https://developers.google.com/speed/libraries/devguide"
    , "innerHTML=": "http://www.w3schools.com/jsref/prop_html_innerhtml.asp"
    , "jQuery": "http://learn.jquery.com/"
    , "JavaScript": "http://www.w3schools.com/js/default.asp"
    , "JS Fiddle": "http://jsfiddle.net/"
    , "JS Fiddle Tutorial": "http://doc.jsfiddle.net/tutorial.html"
    , "JSF Bael" : "http://jsfiddle.net/igoryen/Nr9PB/"
    , "JSF Batuan" : "http://jsfiddle.net/igoryen/H3FSf/"
    , "JSF Beach Plum" : "http://jsfiddle.net/igoryen/JJDnF/2/"
    , "JSF Bearberry": "http://jsfiddle.net/igoryen/J83H8/4/"
    , "JS hint": "http://www.jshint.com/"
    , "JS the Good Parts": "http://eleventyone.done.hu/OReilly.JavaScript.The.Good.Parts.May.2008.pdf"
    , "Nunjucks": "http://nunjucks.jlongster.com/"
    , "Nunjucks (@ npmjs)": "https://npmjs.org/package/nunjucks"
    , "onclick=": "http://www.w3schools.com/jsref/event_onclick.asp"
    , "setFullYear()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_setfullyear2"
    , "setInterval()": "http://www.w3schools.com/js/js_timing.asp"
    , "setTimeOut()": "http://www.w3schools.com/js/js_timing.asp"
    , "toUTCString()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_toutcstring"
    , "Hello World! 1": "http://jsfiddle.net/igoryen/3pEyA/"
    , "Hello World! 2":"http://jsfiddle.net/igoryen/3pEyA/1/"
    , "Hello World! 3":"http://jsfiddle.net/igoryen/3pEyA/2/"
    , "Hello World! 4":"http://jsfiddle.net/praveen_prasad/XNJxT/14/"
    , "List": "http://jsfiddle.net/rniemeyer/bxfXd/"
    , "Popcorn": "http://jsfiddle.net/rwaldron/xhXE6/"
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

