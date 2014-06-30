var object = {  // 1
    "2014-06-20 Psaki refugees to Ukraine/Russia": "http://www.youtube.com/watch?v=m4fhkLKxdCA"
  , "2014-06-18 ukrainians cut off ears 1": "http://www.youtube.com/watch?v=Y9jMlg3rkH4"
  , "2014-06-18 ukrainians cut off ears 2": "http://www.novorosinform.org/news/id/720"
  , "2014-06-16 Psaki on insult at Putin": "http://www.youtube.com/watch?v=wY2ghdAUpf4"
  , "2014-06-16 Yatsenyuk untermensch 1": "http://www.liveleak.com/view?i=fb1_1402843212"
  , "2014-06-16 Yatsenyuk untermensch 2": "http://usa.mfa.gov.ua/en/press-center/news/24185-mi-uvichnimo-pamjaty-gerojiv-ochistivshi-nashu-zemlyu-vid-nechistiarsenij-jacenyuk-u-spivchutti-ridnim-i-blizykim-zagiblih-vojiniv-u-lugansyku"
  , "2014-06-16 Yatsenyuk untermensch 3": "http://vz.ru/news/2014/6/16/691357.html"
  , "2014-05-25 Poroshenko 1000 g promise": "http://www.youtube.com/watch?v=g6tuoiOkRSM"
  , "2014-05-09 People's Deputy about Hitler": "http://www.youtube.com/watch?v=A05s6GrztbQ#t=54" 
  , "2014-04-15 Andrey Novikov about Kiev Junta": "http://www.youtube.com/watch?v=uOXvYVr1ATg" 
  , "2014-03-18 US State Dept Spokeswoman dodges answer": "https://www.youtube.com/watch?v=3j-lsAKQgog" 
  , "2014-03-18 Timoshenko Russophobic": "https://www.youtube.com/watch?v=m6t5PQ3rQ8U" 
  , "2014-03-15 Right Sector in Kiev Rada": "https://www.youtube.com/watch?v=FDoQXxeKN7s" 
  , "2014-03-11 Ukraine Defence Minister about Ukr. Army": "http://www.youtube.com/watch?v=WXLKDFMTyNY"  
  , "2014-03-04 RF Ambassador in UN shows Ukraine's Prez's letter": "http://www.youtube.com/watch?v=c766g09Ya2s" 
  , "2014-03-03 US Ambassador in UN No Threat": "http://globalnews.ca/video/1184838/us-ambassador-tells-un-security-council-russian-intervention-in-ukraine-a-response-to-an-imaginary-threat" 
};

// 2
function insensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();
  return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);
}

// 10
function printObj(obj){
  var keys = [];  // 15
  var currentKey,nextKey, f;
  var bag = "";
  var startingLetter = "";

  for (var k in obj){  // 20
    if (obj.hasOwnProperty(k)){ // 25
      keys.push(k);   // 30
    }
  }

  keys.sort(insensitive); // 35
  keys.reverse(); // 36

  for (f = 0; f < keys.length; f++) {  // 40

    if (!keys[f - 1]) {
      bag = "<hr>" + keys[f].substr(0,4) + "<br>";
    }

    startingLetter = ""; // 45

    // 50
    currentKey = keys[f]; //console.log('currentKey: '+ currentKey);
    if (keys[f + 1]) {   // if nextKey exists
      nextKey = keys[f + 1]; //console.log('nextKey: ' + nextKey);
    }
    else {
      nextKey = ' ';
    }

    if( currentKey.toLowerCase().charAt(3)  != nextKey.toLowerCase().charAt(3) ){ // 53
    //console.log('in if()');
    //console.log(currentKey.charAt(0).toLowerCase() + " vs " + nextKey.charAt(0).toLowerCase());
    startingLetter += "<hr>" + nextKey.substr(0,4) + "<br>";
    //console.log('startingLetter: '+startingLetter);
  }

  bag += '<a href="'+ obj[currentKey] + '" target="_blank">'+ currentKey.substr(5) + '</a><br>';
  bag += startingLetter; // add the letter to the bag

  } // for()
    return bag; // 60
}; // printObj()

//window.onload = printObj(funnyObj);
function func (){
  var element = document.getElementById('display_pane');
  element.innerHTML = printObj(object);
}

 window.onload = func;

/*
1. create an object
2. this function helps make sort() case-insensitive
10. function to print out a js object
15. declare variable to put array keys in
20. for every key in json object 
25. if key has a property 
30. put key (and its property) into the -keys- array
35. sort the -keys- array regardless of case
36. sort in descending order (so that the newest date gets on top)
40. for each of the elements of the -keys- array
45. empty the main letter variable
50. assign the current key and the next jey
53. if digit at position 3 (i.e. the 4th digit of the year) is different
60. if you use 'document.write()' the document will have only the contents of the object on white background
*/