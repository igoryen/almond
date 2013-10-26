
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "Aloisius Latine": "https://www.youtube.com/watch?v=vZ3gxKCgtEU"  
    , "Business Dictionary": "http://www.businessdictionary.com/"
    , "Cantonese to Jyutping": "http://hktv.cc/hp/cantonesetojyutping/"
    , "Cantonese, Learn 1": "http://cantonese.ca/"
    , "Cantonese, Learn 2": "http://www.cantonese.sheik.co.uk/"  
    , "Fonetiks.org": "http://fonetiks.org/"
    , "Free Dictionary": "http://www.thefreedictionary.com/"
    , "Google Translate": "http://translate.google.com/"
    , "Hebrew For Christians ": "http://www.hebrew4christians.com/index.html"     
    , "Howjsay.com": "http://www.howjsay.com/"
    , "Humanitas - PL": "http://www.youtube.com/watch?v=VK6lNJP3JfU"
    , "IPA converter 1": "http://theaccentlab.com/tools/phonemic-converter/"
    , "IPA converter 2": "http://www.photransedit.com/online/text2phonetics.aspx"
    , "IPA in Unicode": "http://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm"
    , "IPA transcriber": "http://project-modelino.com/english-phonetic-transcription-converter.php?"
    , "IPAcharts with audio": "http://www.yorku.ca/earmstro/ipa/index.html"
    , "Jamaikanize": "http://www.jamaicanize.com/"
    , "Kanji Recognizer": "http://kanji.sljfaq.org/"
    , "Latin Grammar (Orbilat)": "http://www.orbilat.com/Languages/Latin/Grammar/index.html"
    , "Latin Links": "http://www.frcoulter.com/latin/links.html"
    , "Latinum": "https://sites.google.com/site/janualinguae/latin"
    , "LDOCE": "http://www.ldoceonline.com/"
    , "Leo": "http://dict.leo.org/ende/index_en.html"
    , "Merriam-Webster 1": "http://www.merriam-webster.com/"
    , "Merriam-Webster 2": "http://www.learnersdictionary.com/"
    , "Multitran": "http://www.multitran.ru/c/m.exe?a=1"
    , "Nuntii Latini": "http://yle.fi/radio1/tiede/nuntii_latini/"
    , "Omniglot": "http://www.omniglot.com/writing/index.htm"
    , "Orbilat": "http://www.orbilat.com/"
    , "porusski.net": "http://winrus.com/klava.htm"
    , "Recens Latinitas ": "file:///D:/Language/Latina/html/latinitas_recens_latine.html"
    , "Romanian closest to Classical Latin": "http://www.antimoon.com/forum/t2129-0.htm"
    , "Russian Info Service": "http://www.rusyaz.ru/"
    , "Schola": "http://schola.ning.com/"
    , "Simplish": "http://www.simplish.org/"
    , "Ta-Odessa": "http://www.ta-odessa.com/humor/"
    , "Terentius et Milena ": "https://www.youtube.com/watch?v=mi_6LIPEP7M"
    , "Terence Tunberg 1": "http://www.youtube.com/watch?v=XTzAtiFzkKc"
    , "TigerNT - Eng/Cn": "http://www.tigernt.com/"
    , "Translate.ru": "http://www.translate.ru/"
    , "Translit.ru ": "http://www.translit.ru/"
    , "Vulsearch": "http://vulsearch.sourceforge.net/"
    , "Miraglia 1": "De causis corruptæ institutionis Latinæ"
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

