
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
     "amore (humph) webmaker needs": "https://github.com/humphd/amore.webmaker.org/tree/webmaker-needs"
    , "Butter": "https://github.com/mozilla/butter"
    , "GLTHUB 13w29" : "http://glthub.com/?s=2013w29#bugs-todo"
    , "i18n-abide - humph": "https://github.com/humphd/i18n-abide"
    , "i18n-abide - humph - webmaker needs": "https://github.com/humphd/i18n-abide/commit/fc932caa42a4cfa88161dfe1a27e88085e85e3bd"
    , "i18n-abide - moz - issue 38": "https://github.com/mozilla/i18n-abide/issues/38"
    , "prio 130702": "https://webmaker.etherpad.mozilla.org/July2nd"
    , "prio 130706": "https://webmaker.etherpad.mozilla.org/demos"
    , "prio 130708": "https://webmaker.etherpad.mozilla.org/July8th"
    , "prio 130712": "https://webmaker.etherpad.mozilla.org/demos"
    , "prio 130715": "https://webmaker.etherpad.mozilla.org/prioritization"
    , "Localizing Webmaker - dave": "http://vocamus.net/dave/?p=1605"
    , "LoginAPI & User Model": "https://github.com/mozilla/login.webmaker.org/wiki/LoginAPI-&-User-Model"
    , "login.webmaker.org - igoryen": "https://github.com/igoryen/login.webmaker.org"
    , "login.webmaker.org - humph": "https://github.com/humphd/login.webmaker.org"
    , "login.webmaker.org - moz": "https://github.com/mozilla/login.webmaker.org"
    , "MakeAPI - igoryen": "https://github.com/igoryen/MakeAPI"
    , "MakeAPI - humphd": "https://github.com/humphd/MakeAPI"
    , "MakeAPI - moz": "https://github.com/mozilla/MakeAPI"
    , "MakeAPI make_model": "https://gist.github.com/mjschranz/e37e7429373861a3d11e"
    , "MakeAPI API reference": "https://github.com/mozilla/MakeAPI/wiki/API-Reference"
    , "node-webmaker-loginapi": "https://github.com/mozilla/node-webmaker-loginapi"
    , "PasteBin": "http://pastebin.mozilla.org/"
    , "popcorn_maker": "https://github.com/mozilla/popcorn_maker"
    , "popcorn.webmaker.org - moz": "https://github.com/mozilla/popcorn.webmaker.org"
    , "thimble.webmaker.org - moz": "https://github.com/mozilla/thimble.webmaker.org"
    , "VidyoConferencing - Brett": "https://v.mozilla.com/flex.html?roomdirect.html&key=D2NgxbqMh8j2"
    , "webmaker-events - moz": "https://github.com/mozilla/webmaker-events"
    , "webmaker-events - igoryen": "https://github.com/igoryen/webmaker-events"
    , "Webmaker Meetings 13/06/25-27": "https://etherpad.mozilla.org/webmaker-post15th-meetings"
    , "webmaker.org - ali": "https://github.com/alicoding/webmaker.org"
    , "webmaker.org - moz": "https://github.com/mozilla/webmaker.org"
    , "webmaker.org - igoryen": "https://github.com/igoryen/webmaker.org"
    , "webmaker liking makes": "https://etherpad.mozilla.org/webmaker-liking-makes"
    , "webmaker needs": "https://github.com/humphd/amore.webmaker.org/tree/webmaker-needs"
    , "webmaker postmortem  group 1": "https://etherpad.mozilla.org/webmakerpostmortemgroup1"
    , "webmaker postmortem  group 2": "https://etherpad.mozilla.org/webmakerpostmortemgroup2"
    , "webmaker postmortem  group 3": "https://etherpad.mozilla.org/webmakerpostmortemgroup3"
    , "Wiki Mozilla": "https://wiki.mozilla.org/Main_Page"
    , "X-ray goggles - moz" : "https://github.com/mozilla/goggles.webmaker.org"

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
