
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "Aloisius":"https://www.youtube.com/watch?v=vZ3gxKCgtEU"
    , "Blind man's sign": "https://www.youtube.com/watch?v=F8bm2llxxjU"
    , "Bubentsov before firing squad ":"https://www.youtube.com/watch?v=LC1d_2lschs"
    , "Bubentsov`s story ":"https://www.youtube.com/watch?v=XVsIeZW3OFU"
    , "Castle & Beckett":"https://www.youtube.com/watch?v=WSpiVm6BkeA"
    , "Eltsin & Clinton":"http://www.youtube.com/watch?v=3eiIMZQWkdQ"
    , "Gun Control (Goblin)":"http://www.youtube.com/watch?v=pnIbwWEH4UA"
    , "In the blue sea...":"https://www.youtube.com/watch?v=-o9-r26b--E"
    , "Inside Saudi Kingdom":"http://www.youtube.com/watch?v=au9Aqd_-2hc"
    , "Is this your church":"http://www.youtube.com/watch?v=ua0anM-afY0"
    , "It`s Possible!":"https://www.youtube.com/watch?v=r8jP8UJFWso"
    , "Last Year`s Snow was falling":"http://www.youtube.com/watch?v=PwxwqVDnUmc"
    , "Magneto`s Revenge ":"https://www.youtube.com/watch?v=Hyw8973Ql30"
    , "Minkova Milena Latine ":"https://www.youtube.com/watch?v=x3giQCbs7SA"
    , "Monty Python ":"https://www.youtube.com/watch?v=eOfI88NKRzY&feature=endscreen&NR=1"
    , "Moon-rise":"http://vimeo.com/58385453"
    , "Netflix - from outside US": "http://www.youtube.com/watch?v=4tBUbSrorV4"
    , "Our Father":"http://www.youtube.com/watch?v=7Wl-OZ3breE"
    , "Prometheus Explained":"http://www.youtube.com/watch?v=GpEx7pdp2-Q"
    , "Russian guy speaking Latin":"https://www.youtube.com/watch?v=yM_XkP6HMU4&list=PL1CE2A366DFCCCFB5"
    , "Saving Pr. Ryan":"http://www.youtube.com/watch?v=1r8zgU7wE8w"
    , "Seven Seconds to Sell Yourself":"https://www.youtube.com/watch?v=5-ZpP4j09s0"
    , "Terentius et Milena ":"https://www.youtube.com/watch?v=mi_6LIPEP7M"
    , "Three Killer Questions at Interview ":"https://www.youtube.com/watch?v=jdDlmb-lgXk"
    , "猛龍過江":"https://www.youtube.com/watch?v=Wgprb0KcYmw"
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

