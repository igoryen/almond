
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
     "Aniron": "http://www.youtube.com/watch?v=Q6hJqI5BEW8"
    , "Arda ": "http://www.glyphweb.com/arda/default.asp"
    , "Battle for Middle Earth": "https://www.youtube.com/watch?v=suNT5m4_rYI"
    , "Born Of Hope": "http://www.youtube.com/watch?v=qINwCRM8acM"
    , "Children of Hurin": "https://www.youtube.com/watch?v=HtoQWb0jMco"
    , "Elvish ABC ": "http://www.starchamber.com/paracelsus/elvish/elvish-in-ten-minutes.html"
    , "Facts behind Fiction": "https://www.youtube.com/watch?v=krqmf5oBDXk"
    , "Hisweloke ": "http://www.jrrvf.com/hisweloke/sindar/online/sindarin.html"
    , "Hobbit, The": "https://www.youtube.com/watch?v=A7jYQFTV7EM"
    , "Hunt For Gollum, The": "http://www.youtube.com/watch?annotation_id=annotation_486943&feature=iv&src_vid=9H09xnhlCQU&v=VaakJk9vR7U"
    , "Lewis & Tolkien": "https://www.youtube.com/watch?v=iNhCMReS_M4"
    , "LOTR, The": "https://www.youtube.com/watch?v=mfFQuhWaA_k"
    , "Master of the M. Earth": "https://www.youtube.com/watch?v=orhnSy4wkqE&list=PL5760D4D3699A3871"
    , "Middle Earth 1": "https://www.youtube.com/watch?v=Ew4bsGF0G8U"
    , "Middle Earth 2":"https://www.youtube.com/watch?v=UlT1mRYlXZg"
    , "Monaghan Wood Interview": "https://www.youtube.com/watch?v=27_OmRGPfZw"
    , "Myths": "https://www.youtube.com/watch?v=NzBT39gx-TE"
    , "Queen Gandalf ": "https://www.youtube.com/watch?v=G3gR0m2mCGs"
    , "Ranger ": "http://www.youtube.com/watch?v=zf3Kit2V0CI"
    , "Silmarillion 1": "https://www.youtube.com/watch?v=0J1JSLzja7E"
    , "Silmarillion 2":"https://www.youtube.com/watch?v=HJLwB3zNY3Q"
    , "Tolkien Gateway": "http://tolkiengateway.net/wiki/Main_Page"
    , "Wood Laughs": "https://www.youtube.com/watch?v=HYpjI8ht-K4"
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

