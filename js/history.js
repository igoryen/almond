var object = {  // 1
    "2014-06-20 Psaki refugees to Ukraine/Russia": "http://www.youtube.com/watch?v=m4fhkLKxdCA"
  , "2014-06-18 ukrainians cut off ears": "http://www.youtube.com/watch?v=Y9jMlg3rkH4"
  , "2014-06-18 ukrainians cut off ears": "http://www.novorosinform.org/news/id/720" 
  , "2014-06-16 Yatsenyuk untermensch": "http://www.liveleak.com/view?i=fb1_1402843212"
  , "2014-05-25 Poroshenko 1000 g promise": "http://www.youtube.com/watch?v=_7cYA3luhAk"
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
      bag = "<hr>" + keys[f].charAt(0).toUpperCase() + "<br>";
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

    if( currentKey.toLowerCase().charAt(0)  != nextKey.toLowerCase().charAt(0) ){
    //console.log('in if()');
    //console.log(currentKey.charAt(0).toLowerCase() + " vs " + nextKey.charAt(0).toLowerCase());
    startingLetter += "<hr>" + nextKey.toUpperCase().charAt(0) + "<br>";
    //console.log('startingLetter: '+startingLetter);
  }

  bag += '<a href="'+ obj[currentKey] + '" target="_blank">'+ currentKey + '</a><br>';
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
60. if you use 'document.write()' the document will have only the contents of the object on white background
*/