
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "Browser Quest": "http://browserquest.mozilla.org/"
    , "Cross-team call": "https://webmaker.etherpad.mozilla.org/crossteam2"
    , "Demos": "https://webmaker.etherpad.mozilla.org/demos"
    , "Goggles": "https://goggles.webmaker.org/"
    , "Jenkins": "https://jenkins.mofoprod.net/"
    , "l10n at MozFest": "https://etherpad.mozilla.org/l10n-mozfest-2013"
    , "l10n Sept 5": "https://etherpad.mozilla.org/l10n-sep05"
    , "Localizing Webmaker - dave": "http://vocamus.net/dave/?p=1605"
    , "MakerParty Recap": "https://docs.google.com/spreadsheet/ccc?key=0ApCSa8l3sstMdEVheVZEZUN5aVBtYlFaeDZuTW9Ld0E#gid=0"
    , "MozFest Dates": "https://wiki.mozilla.org/Webmaker/Product/Roadmap/Mozfest#Dates"
    , "MozFest": "http://mozillafestival.org/"
    , "PasteBin": "http://pastebin.mozilla.org/"
    , "popcorn @ MoFo-staging": "https://popcorn.mofostaging.net"
    , "Popcorn @ staging": "https://popcorn.mofostaging.net/healthcheck"
    , "prio 130702": "https://webmaker.etherpad.mozilla.org/July2nd"
    , "prio 130706": "https://webmaker.etherpad.mozilla.org/demos"
    , "prio 130708": "https://webmaker.etherpad.mozilla.org/July8th"
    , "prio 130712": "https://webmaker.etherpad.mozilla.org/demos"
    , "prio 130715": "https://webmaker.etherpad.mozilla.org/prioritization"
    , "Scrum-fest": "https://teach.etherpad.mozilla.org/Scrumfest"
    , "Sessions - TeachBuild": "https://teach.etherpad.mozilla.org/Sessions-TeachBuild"
    , "Statistics": "https://mozillafoundation.geckoboard.com/dashboards/F62088172D822E2A"
    , "SuMo": "https://support.mozilla.org/en-US/home"
    , "Teach the web - build webmaker": "https://teach.etherpad.mozilla.org/teachtheweb-buildwebmaker"
    , "Thimble @ MoFo-staging": "https://thimble.mofostaging.net"
    , "Thimble @ staging": "https://thimble.mofostaging.net/healthcheck"
    , "TogetherJS": "https://togetherjs.com/"
    , "VidyoConferencing - Brett": "https://v.mozilla.com/flex.html?roomdirect.html&key=D2NgxbqMh8j2"
    , "Webmaker @ MoFo-staging": "https://webmaker.mofostaging.net/"
    , "webmaker liking makes": "https://etherpad.mozilla.org/webmaker-liking-makes"
    , "Webmaker Meetings 13/06/25-27": "https://etherpad.mozilla.org/webmaker-post15th-meetings"
    , "webmaker postmortem  group 1": "https://etherpad.mozilla.org/webmakerpostmortemgroup1"
    , "webmaker postmortem  group 2": "https://etherpad.mozilla.org/webmakerpostmortemgroup2"
    , "webmaker postmortem  group 3": "https://etherpad.mozilla.org/webmakerpostmortemgroup3"
    , "Webmaker.org @ prod": "https://webmaker.org/"
    , "Webmaker.org @ staging": "https://webmaker.mofostaging.net/"
    , "Wiki Mozilla": "https://wiki.mozilla.org/Main_Page"
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

