
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
     "Americana Move mounting":"http://www.youtube.com/watch?v=K6r8MkqeSMM&feature=relmfu"
   , "Chokefrom above -> Arm Bar":"http://www.youtube.com/watch?v=sS3iZ9rNaG8&feature=relmfu"
   , "Choke from under -> Arm Bar":"http://www.youtube.com/watch?v=fro50KwBDjg"
   , "Clothes Grab -> Leg Sweep":"http://www.youtube.com/watch?v=XfSBGZz_6Mc&feature=relmfu"
   , "Demo (Jiujitsu)":"http://www.youtube.com/watch?v=erQ7AVtcwec"
   , "Demo (part 1)":"http://www.youtube.com/watch?v=g6sZSC66ul4&feature=relmfu"
   , "Demo (part 2)":"http://www.youtube.com/watch?v=Y600l5UbR10&feature=relmfu"
   , "Demo (part 3)":"http://www.youtube.com/watch?v=EzSdD22BqXM&feature=relmfu"
   , "Kimura":"http://www.youtube.com/watch?v=HA-2NRuTLkw"
   , "Knock out":"http://www.youtube.com/watch?v=san7xnrCAQc"
   , "Mounting -> Closed Guard":"http://www.youtube.com/watch?v=9nrYaxOqmaQ&feature=relmfu"
   , "Mounted -> Kimura":"http://www.youtube.com/watch?v=Ed_BQaWtyck&feature=relmfu"
   , "Shoulder grab -> Hiji Gaeshi":"http://www.youtube.com/watch?feature=fvwp&v=CW5VpKC9ocU&NR=1"
   , "Top Cross Choke mounting":"http://www.youtube.com/watch?v=mtAtWH8dh7o&feature=relmfu"
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

