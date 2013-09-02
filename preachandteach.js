
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
    "Dawkins owned": "http://www.youtube.com/watch?v=4NzFr4lM-lc"
    , "Dawkins afraid to debate": "http://www.youtube.com/watch?v=E7SnTzNHUJ8"
    , "Devil`s under my feet":"http://www.youtube.com/watch?v=D_TXYEmqn6U"
    , "Doubt, Fear, and Unbelief":"http://www.youtube.com/watch?v=NomZHolreBk"
    , "God`s healing Power" : "http://www.youtube.com/watch?v=553lN-JaHAI"
    , "God`s Medicine":"http://www.youtube.com/watch?v=d2Wp5_bL338"
    , "Hagin (playlist)":"http://www.youtube.com/playlist?list=PL4C095CACCE805213"
    , "Hagin (JehToday)" : "http://www.youtube.com/user/JehToday/search?query=Hagin"
    , "I'm not moved by what I see": "http://www.youtube.com/watch?v=NomZHolreBk#t=1h00m35s"
    , "Why speak in tongues" : "http://www.youtube.com/watch?v=ysI9wMt09OU"
    , "Words & Confessions" : "http://www.youtube.com/watch?v=bSkSreKP_3g"

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

