
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
     "Define an i18n bundle": "http://requirejs.org/docs/api.html#i18n"
    , "Header field definitions": "http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html"
    , "IETF language tag": "http://en.wikipedia.org/wiki/IETF_language_tag"
    , "i18n guy": "http://www.i18nguy.com/"
    , "i18n in Node": "http://ejohn.org/blog/a-strategy-for-i18n-and-node/"
    , "I love you": "http://iloveyou-localized.herokuapp.com/" 
    , "i18n-abide": "https://github.com/mozilla/i18n-abide"
    , "i18n-abide README": "https://github.com/humphd/i18n-abide/blob/806b132347426d3114421a6e804f9adf8b1c10ab/README.md"
    , "i18n-abide changes": "https://github.com/humphd/i18n-abide/commit/806b132347426d3114421a6e804f9adf8b1c10ab"
    , "l10n community": "https://hacks.mozilla.org/2013/04/localization-community-tools-process-part-2-of-3-a-node-js-holiday-season-part-10/"
    , "Language identifiers": "http://www.i18nguy.com/unicode/language-identifiers.html"
    , "Language subtag registry": "http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry"
    , "Localizing a node.js app - Ali": "http://alicoding.com/localized-first-webmaker-org-node-js-app/"

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

