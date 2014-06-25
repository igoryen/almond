var object = {  // 1
    "CEC (Can.Exp.Class)": "http://www.cic.gc.ca/english/immigrate/cec/index.asp"
  , "Citizenship apply": "http://www.cic.gc.ca/english/citizenship/become.asp"
  , "Dependent Child": "http://www.cic.gc.ca/english/helpcentre/glossary.asp#dependent_child"
  , "Residence calculator": "https://eservices.cic.gc.ca/rescalc/resCalcStartNew.do?&lang=en"
  , "PR requirements": "http://www.cic.gc.ca/english/helpcentre/answer.asp?q=355&t=5"
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
40. for each of the elements of the -keys- array
45. empty the main letter variable
50. assign the current key and the next jey
60. if you use 'document.write()' the document will have only the contents of the object on white background
*/