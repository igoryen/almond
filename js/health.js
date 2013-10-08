
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "Abs Diet":"http://www.absdiet.com/uof/absdiet/abospl/index.html"
    , "Abs exercises": "http://www.youtube.com/watch?v=FofDChlSILU"
    , "Apple":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1809/2"
    , "Banana":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1846/2"
    , "Bodybuilding.com": "http://www.bodybuilding.com/"
    , "Body segment data": "http://www.exrx.net/Kinesiology/Segments.html#Lengths"
    , "Bread, Multy-grain":"http://nutritiondata.self.com/facts/baked-products/4846/2"
    , "Cardiac Arrest Help": "http://ahsc.arizona.edu/node/730"
    , "chicken breast":"http://nutritiondata.self.com/facts/poultry-products/703/2"
    , "Dikul V.I. - site": "http://www.dikul.org/"
    , "Egg":"http://nutritiondata.self.com/facts/dairy-and-egg-products/117/2"
    , "Everest Climb": "http://www.youtube.com/watch?v=84Xh1PoQvlA"
    , "Exercise finder": "http://www.bodybuilding.com/exercises/finder/lookup/filter/muscle"
    , "Grapes":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1920/2"
    , "High-Protein Foods":"http://lowcarbdiets.about.com/od/whattoeat/a/highproteinfood.htm"
    , "HPV vaccine?": "https://www.youtube.com/watch?v=wQSTUIw8_1U"
    , "Human musculosceletal system": "http://en.wikipedia.org/wiki/Human_musculoskeletal_system"
    , "leg":"http://nutritiondata.self.com/facts/poultry-products/721/2"
    , "Life Fitness":"http://www.lifefitness.com/index.html"
    , "Nurgitz, Richard": "http://brimleydental.com/dr_n.html"
    , "Nutrition Data":"http://nutritiondata.self.com/"
    , "Nutrition Facts Label":"http://www.fda.gov/food/resourcesforyou/consumers/nflpm/ucm274593.htm"
    , "Nutrition Value":"http://www.nutritionvalue.org/"
    , "Potato":"http://nutritiondata.self.com/facts/vegetables-and-vegetable-products/2908/2"
    , "Protein Foods":"http://www.fitday.com/fitness-articles/fitness/body-building/the-best-protein-foods-for-building-muscle.html"
    , "Protein-full Foods":"http://www.healthaliciousness.com/articles/foods-highest-in-protein.php"
    , "Raspberry":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/2053/2"
    , "Strawberry":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/2064/2"
    , "tongue":"http://nutritiondata.self.com/facts/beef-products/3482/2"
    , "Toronto Health": "http://www.toronto.ca/health/"
    , "Toronto Immunization": "http://www.toronto.ca/health/immunization_children/index.htm"
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

