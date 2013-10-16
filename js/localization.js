
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
    "Accept-Language used for locale setting": "http://www.w3.org/International/questions/qa-accept-lang-locales"
    , "Define an i18n bundle": "http://requirejs.org/docs/api.html#i18n"
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
    , "wm l10n 01": "https://github.com/mozilla/webmaker.org/commit/da0900322732d5f5c09925cdcddc50240769d1ab"
    , "wm l10n 02 ": "https://github.com/mozilla/webmaker.org/commit/4b620fd30fe19bcba836344d6795a62ab84d7ea7"
    , "wm l10n 03 /me and /tools": "https://github.com/mozilla/webmaker.org/commit/58d11559e74b067f772dc5fb7d39cb7f51ab75bb"
    , "wm l10n 04 filter": "https://github.com/mozilla/webmaker.org/commit/be1a00882d462c09583b10039a72c448a9f1e166"
    , "wm l10n 05 more": "https://github.com/mozilla/webmaker.org/commit/ac9b93e081c972315327af43ec6719ae1b94be42"
    , "wm l10n 06 add filter": "https://github.com/mozilla/webmaker.org/commit/f1290975556588afdf8f176ef6b36316068260e3"
    , "wm l10n 07 locale fix": "https://github.com/mozilla/webmaker.org/commit/edb6abd112b4eed9365c1c85f82796f5c10c5323"
    , "wm l10n 08 package.json": "https://github.com/mozilla/webmaker.org/commit/66b45ac1ec360bd070fa82228b1e0cd772ce4f84"
    , "wm l10n 09 feedback": "https://github.com/mozilla/webmaker.org/commit/512f7f905d3a80b50ae50bbe9b4a3b31c79f0416"
    , "wm l10n 10 ": "https://github.com/mozilla/webmaker.org/commit/12139b54d450272d7023db3fac75eb77c5942541"
    , "wm l10n 11 package.json": "https://github.com/mozilla/webmaker.org/commit/73cdf69efc7efe1b7faa870ce114e428d0c6386a"
    , "wm l10n 12 load confirm": "https://github.com/mozilla/webmaker.org/commit/bb94b83f0e933c42d841e1ad8d5517a96b0bc265"


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

