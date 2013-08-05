//----------------------------------------------------------------------------
// VERSION 2: printing out a json object of buttons

var buttons = {

 "Funny":"funny()"
 , "Git": "git()"
 , "Gregoriana":"gregoriana()"
 , "Health":"health()"
 , "HTML5":"html5()"
 , "IT stuff":"its()"
 , "IT terms":"itt()"
 , "Java":"java()"
 , "JavaScript":"js()"
 , "Job Search" : "jobsearch()"
 , "Lingua":"lingua()"
 , "Localization":"l10n()"
 , "Mozilla" : "mozilla()"
 , "Mozilla bugs" : "mozBugs()" 
 , "Music":"mus()"
 , "Node.js":"nodejs()"
 , "PHP":"php()"
 , "Preach & Teach":"p_t()"
 , "Praise & Worship":"p_w()"
 , "Self-Defense":"selfdefense()"
 , "Seneca":"seneca()"
 , "Tolkieniana":"tolkiniana()"
 , "Transifex" : "transifex()"
 , "Unsorted":"unsorted()"
 , "Video":"video()"
 , "Webdev":"webdev()"
 , "Xternal": "xternal()"
};
var keys = [];
var key,f;

for (var key in buttons){
  if (buttons.hasOwnProperty(key)){
    keys.push(key);
  }
}
keys.sort();


for (f = 0; f < keys.length; f++){ 

  key = keys[f];

  document.write('<button onclick="' + buttons[key] + '">' + key + '</button><br>');
}


// end of VERSION 2

// end of Printing buttons out.
//----------------------------------------------------------------------------




//document.getElementById("display_pane").innerHTML=myFunction(word);

//----------------------------------------------------------------------------
// this function helps make sort() case-insensitive
function insensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();

  return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);

}

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


//----------------------------------------------------------------------------
function funny(){
  document.getElementById("display_pane").innerHTML=funnyFunc();
}

var funnyFunc = function(){

  var funnyObj = {
    "Chariots of Fire":"https://www.youtube.com/watch?v=CwzjlmBLfrQ"
    , "A, Masliakov? ":"http://www.youtube.com/watch?v=PRm4N5CcZMY"
    , "Ain`t Nobody Got Time For That ":"http://www.youtube.com/watch?v=8cT_Ulmcrys"
    , "All is lost! ":"http://www.youtube.com/watch?v=EmJdZ7DcV7U"
    , "Atkinson & E.John ":"https://www.youtube.com/watch?v=Hm5EkJXlgM8"
    , "Baby Talk ":"http://www.youtube.com/watch?v=sDocL7AfIRo"
    , "Batman Chooses his voice ":"http://www.youtube.com/watch?v=WOg3ZE3hNQc"
    , "Bed Intruder ":"http://www.youtube.com/watch?v=VKsVSBhSwJg"
    , "Bilan Parody 1":"https://www.youtube.com/watch?v=rfXdRoUVUYo"
    , "Bilan Parody 2":"https://www.youtube.com/watch?v=xGIbMPSMFP8"
    , "Bolsheviks & Illiteracy":"http://www.youtube.com/watch?v=CX_S1DXHW4Y"
    , "Borsch ":"https://www.youtube.com/watch?v=cMIHLzuJ4Wg"
    , "Cause I`m drunk":"http://www.youtube.com/watch?v=Vw4_pwIUMPY"
    , "Celebration ":"https://www.youtube.com/watch?v=G7fo1hJIj5Y"
    , "Chinese Boso":"https://www.youtube.com/watch?v=hBxqptNa6-8"
    , "Chocolate waffles":"http://www.youtube.com/watch?v=eFcWvCEe0Ac"
    , "Coliseum":"https://www.youtube.com/watch?v=ftWL_ETjuo0"
    , "Couch":"http://www.youtube.com/watch?v=6Pm3KQvYk9Q"
    , "Crusty, Ted":"https://www.youtube.com/watch?v=BEKuKD4R0y4&list=UU2nPLKT5yMdVB5HoBpxRs8g"
    , "Cyborgs":"http://www.youtube.com/watch?v=1yjjNiu4i3k"
    , "Be Quiet":"http://www.youtube.com/watch?v=xpovtaBBLCE"
    , "L`on`a Killer":"http://www.youtube.com/watch?v=3EM4IyBlOzg"
    , "Pechen`ka":"http://www.youtube.com/watch?v=PvGRjauxf4M"
    , "Pechen`ye lom":"http://www.youtube.com/watch?v=2u-NHOGiiUw"
    , "Dudu":"http://www.youtube.com/watch?v=OLDGnawrdPk"
    , "Shito & Kryto":"http://www.youtube.com/watch?v=INBDbmDqZAg"
    , "Whack against the wall":"http://www.youtube.com/watch?v=GZBbtk47vZw"
    , "Do you speak English":"http://www.youtube.com/watch?v=rxUm-2x-2dM"
    , "Dramatic Animals ":"http://www.youtube.com/watch?v=0vT0dgIZN1o"
    , "Dramatic Cat ":"http://www.youtube.com/watch?v=plWnm7UpsXk"
    , "Dramatic Cat ":"http://www.youtube.com/watch?v=EmeLlUmg7Xc"
    , "Dramatic Gopher ":"http://www.youtube.com/watch?v=8lXdyD2Yzls"
    , "Exam Answer Best ":"https://www.youtube.com/watch?v=cMsxnDMBifk"
    , "Frankenthumb" : "http://www.youtube.com/watch?v=TDYzLJk36VI"
    , "Gerald the Gorilla":"http://www.youtube.com/watch?v=beCYGm1vMJ0"
    , "German Coast Guard":"http://www.youtube.com/watch?v=yR0lWICH3rY"
    , "Give me the meat!":"https://www.youtube.com/watch?v=G1bziMXs_hs"
    , "Greatest Song in the World":"http://www.youtube.com/watch?v=_lK4cX5xGiQ"
    , "Guest on the treshhold":"http://www.youtube.com/watch?v=ViD4OBWt2EI"
    , "Gut":"http://www.youtube.com/watch?v=gUXSut1Y6VE"
    , "Hare poem (pole chudes" : "http://www.youtube.com/watch?v=O_Lu9MBqvak"
      , "Harbin Invitation":"http://www.youtube.com/watch?v=gJg9AR8p_qY"
      , "Hercules":"http://www.youtube.com/watch?v=8jRuK5mx9nA"
      , "History Lesson":"http://www.youtube.com/watch?v=YnFU22znYaM"
      , "History of English":"http://www.youtube.com/watch?feature=player_embedded&v=H3r9bOkYW9s"
      , "History Lesson":"http://www.youtube.com/watch?v=YnFU22znYaM"
      , "I`m So Excited":"http://www.youtube.com/watch?v=-aS3yhRqllU"
      , "IK+":"https://www.youtube.com/watch?v=wDko0WVJUr0"
      , "Imbecil":"http://www.youtube.com/watch?v=pwtU8ycIV5Y"
      , "Instant Noodles":"http://www.youtube.com/watch?v=BIDGPWAuvb4"
      , "Internets":"http://www.youtube.com/watch?v=LKTH6f1JfX8"
      , "Iron Mask, the":"http://www.youtube.com/watch?v=J398esfj5q8"
      , "Is There God":"http://www.youtube.com/watch?feature=player_embedded&v=A0g3uO1O3Lg"
      , "JK Wedding Dance":"http://www.youtube.com/watch?v=4-94JhLEiN0"
      , "Kenlee" : "https://www.youtube.com/watch?v=FQt-h753jHI"
      , "Kin-dza-dza Matrix":"http://www.youtube.com/watch?v=aTDliqQpdcU"
      , "Kin-dza-dza Terminator ":"http://www.youtube.com/watch?v=NZkPKKudfqI"
      , "KVN Best":"http://kvnbest.ru/"
      , "Lack of Evidence":"http://www.youtube.com/watch?v=lSqRGkDe6Dw"
      , "Latin":"https://www.youtube.com/watch?v=NI8UZubOJlo"
      , "Lada Priora":"http://www.youtube.com/watch?v=ybzymcQlozA&NR=1&feature=fvwp"
      , "Litvinkov":"https://www.youtube.com/watch?v=Yo4q89246dc"
      , "LOTR Remix 1":"https://www.youtube.com/watch?v=Q_Co7er4Vuk"
      , "LOTR Remix 2":"https://www.youtube.com/watch?v=rjx1-otbBLg"
      , "LOTR Remix 3":"https://www.youtube.com/watch?v=lTZw-WY4T10"
      , "Matrix Ukrainization":"http://www.youtube.com/watch?v=BZ70-zy9KZk"
      , "Medicinal grass from UZ" : "http://www.youtube.com/watch?v=SpdlG3IOQA4"
      , "Murmurs of the Middle Earth":"https://www.youtube.com/watch?v=XJfGnqKoXYY"
      , "My Heart Will Go On":"http://www.youtube.com/watch?v=tlDSsII-yBo"
      , "9gag":"http://9gag.com/"
      , "Novosib ozvuchka ":"http://www.youtube.com/watch?v=6w-PpPizmPk"
      , "Nucular ":"http://www.youtube.com/watch?v=OoASZyihalc"
      , "Offensive Translator":"http://www.youtube.com/watch?v=XY66ZJ0TFUI"
      , "OM* Cat ":"http://www.youtube.com/watch?v=C_S5cXbXe-41"
      , "Orders from Mordor ":"http://www.youtube.com/watch?v=fsXmG66ungE"
      , "Pelmeni Boyarskie ":"https://www.youtube.com/watch?v=yb2dZ_7jsco"
      , "Physics exam ":"https://www.youtube.com/watch?v=rpuXiZxZcog"
      , "Pickpocket Master ":"http://www.youtube.com/watch?v=0TOFlb09Vuk"
      , "Pillow Talk ":"http://www.youtube.com/watch?v=SERiABqsmyA"
      , "Reaction gifs":"http://www.reactiongifs.com/"
      , "Revva the Only Member":"http://www.youtube.com/watch?v=ILTriIzFye0"
      , "Riders on White Horses":"http://www.youtube.com/watch?v=XVsIeZW3OFU"
      , "Rocky Lockridge":"http://www.youtube.com/watch?v=mpDoziF-kyI"
      , "RU Help US after collapse ":"http://www.youtube.com/watch?v=KPaVRCpFL7g"
      , "Scaredy Guy ":"http://www.youtube.com/watch?feature=player_embedded&v=Bwr4XEHmfBs"
      , "Scwarzenegger Quotes ":"http://www.youtube.com/watch?v=pDxn0Xfqkgw"
      , "Soul on fire":"http://www.youtube.com/watch?v=EZ5SwfAqkVg"
      , "Stalking Cat ":"http://www.youtube.com/watch?v=fzzjgBAaWZw"
      , "Strategic Seeds ":"https://www.youtube.com/watch?v=LmGo1w82IM8"
      , "Stuntman Ukrop 1":"http://www.youtube.com/watch?v=QwVVONOn8JA"
      , "Stuntman Ukrop 2":"http://www.youtube.com/watch?v=vCUxgxgDvOE"
      , "Terminator in verse":"http://www.youtube.com/watch?v=oETUre2ey3A"
      , "Toilet Paper":"http://www.youtube.com/watch?v=uWdFHT4h29k"
      , "They`re taking the hobbits to Isengard ":"http://www.youtube.com/watch?v=uE-1RPDqJAY"
      , "Trial trial (channel)":"http://www.youtube.com/user/Trial1983?feature=watch"
      , "Turkish Action Movie":"http://www.youtube.com/watch?annotation_id=annotation_491226&feature=iv&src_vid=eECkdle_dTo&v=sPNYYr4aLaM"
      , "Twelve Chairs, the":"http://lib.ru/ILFPETROV/ilf_petrov_12_chairs_engl.txt"
      , "When I was little I had a grandma, too ":"http://www.youtube.com/watch?v=gffZRbGVJG4"
      , "Who Could Be President ":"http://www.youtube.com/watch?v=0SHsg20-9LM"
      , "Who farted?":"https://www.youtube.com/watch?v=78WEaRm2W2k"
      , "Why is the rum gone? ":"http://www.youtube.com/watch?v=JImcvtJzIK8"
    };
    return printObj(funnyObj);;
  };
//===========================================================


function git(){
  document.getElementById("display_pane").innerHTML= git2();
};

var git2 = function (){

  var gitObj = {


    "Abiu":"https://github.com/igoryen/abiu"
    , "Acerola":"https://github.com/igoryen/acerola"
    , "Ackee":"https://github.com/igoryen/ackee"
    , "Ali Al Dallal" : "https://github.com/alicoding"
    , "Almond": "https://github.com/igoryen/almond"
    , "Ambarella":"https://github.com/igoryen/ambarella"
    , "Amore":"https://github.com/humphd/amore.webmaker.org"
    , "Apple":"https://github.com/igoryen/apple"
    , "Apricot":"https://github.com/igoryen/apricot"
    , "Araza":"https://github.com/igoryen/araza"
    , "Atemoya":"https://github.com/igoryen/atemoya"
    , "Avocado":"https://github.com/igoryen/avocado"
    , "Banana":"https://github.com/igoryen/banana"
    , "Create a repo":"https://help.github.com/articles/create-a-repo"
    , "Culinary fruit, list":"http://en.wikipedia.org/wiki/List_of_culinary_fruits"
    , "David Humphrey" : "https://github.com/humphd/"
    , "EJS":"https://github.com/visionmedia/ejs"
    , "foreman" : "https://github.com/ddollar/foreman"
    , "Friendlycode":"https://github.com/mozilla/friendlycode"
    , "Transifex":"https://www.transifex.com/projects/p/friendlycode/"
    , "Friendlycode, trivial embedding":"http://localhost:8005/examples/bare.html"
    , "Friendlycode, alternate publishing":"http://localhost:8005/examples/alternate-publisher.html"
    , "Transifex":"http://localhost:8005/examples/transifex.html"
    , "Friendly code, l10ns":"http://localhost:8005/examples/transifex.html?local=1"
    , "git blame":"http://jeanbahnik.com/2012/05/using-git-blame/"
    , "git Book":"http://git-scm.com/book"
    , "git: install":"https://help.github.com/articles/set-up-git"
    , "git reference":"http://gitref.org/basic/"
    , "Gobbledygook":"https://github.com/lloyd/gobbledygook"
    , "Hello World!":"https://github.com/alicoding/Hello-World/"
    , "Interactive Rebase":"https://help.github.com/articles/interactive-rebase"
    , "Igoryen":"https://github.com/igoryen"
    , "localhost:3000":"http://localhost:3000"
    , "localhost:7777":"http://localhost:7777"
    
    , "Mango":"https://github.com/igoryen/mango"
    , "Markdown Syntax":"https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md"
    , "My links":"https://github.com/igoryen/mylinks"
    , "NVM":"https://github.com/creationix/nvm"
    , "nodemon" : "https://github.com/remy/nodemon"
    , "Pay attention to Node.js":"http://readwrite.com/2010/10/20/why-developers-should-pay-atte"
    , "Power your workflow":"https://www.youtube.com/watch?v=GYnOwPl8yCE"
    , "Spectrum (Ali)" : "https://github.com/alicoding/spectrum"
    , "SSH keys: generating":"https://help.github.com/articles/generating-ssh-keys"
    , "SIL2013":"https://github.com/storytellinginnovationlab2013"
    , "10 things I hate about git":"http://steveko.wordpress.com/2012/02/24/10-things-i-hate-about-git/"
    , "Test":"https://github.com/igoryen/Test"
    , "Toolness":"https://github.com/toolness"
    , "zsh shell" : "https://github.com/robbyrussell/oh-my-zsh"
    , "zsh syntax highlighting" : "https://github.com/zsh-users/zsh-syntax-highlighting"
};

  return printObj(gitObj);

}; // end git2()

//----------------------------------------------------------------------------
function gregoriana() {
  document.getElementById("display_pane").innerHTML = gregorianaFunc();

}
;

var gregorianaFunc = function() {

  var gregorianaObj = {
    "Absolve, Domine": "http://www.youtube.com/watch?v=np_slIOn5Jk"
    , "Ad Te Levavi": "http://www.youtube.com/watch?v=VC4Bg3HlMys"
    , "Adorabo": "http://www.youtube.com/watch?v=LYJqCD2-S0A"
    , "Adorate Deum": "http://www.youtube.com/watch?v=Fe3QSdTQa7w"
    , "Adoro Te Devote 1": "http://www.youtube.com/watch?v=4Dpy0SUh0H4"
    , "Adoro Te Devote 2": "http://www.youtube.com/watch?v=VjNhyHsgU7Y"
    , "Advocatam": "http://www.youtube.com/watch?v=2HEKhr002Ts"
    , "Agnus Dei: a": "http://www.youtube.com/watch?v=dsFOxPa-r_4"
    , "Agnus Dei: 1 Lux et Origo": "http://www.youtube.com/watch?v=OcngUd1oMm0"
    , "Agnus Dei: 4 Cunctipotens Genitor Deus": "http://www.youtube.com/watch?v=NjzuOG7Fits"
    , "Agnus Dei: 9 Cum Jubilo": "http://www.youtube.com/watch?v=eX8rgnvV-xA"
    , "Agnus Dei: 8 De Angelis": "http://www.youtube.com/watch?v=RJ_ePf2Se_4"
    , "Agnus Dei: 10 Alme Pater": "http://www.youtube.com/watch?v=bPdP7BLWYos"
    , "Agnus Dei: 11 Orbis Factor": "http://www.youtube.com/watch?v=qTlM4v1uCAw"
    , "Agnus Dei: 14 Jesu Redemptor": "http://www.youtube.com/watch?v=HErBFVgnn9E"
    , "Agnus Dei: 17": "http://www.youtube.com/watch?v=prIuDOGiXLg"
    , "Agnus Dei: 18": "http://www.youtube.com/watch?v=1o4QJBCiXjs"
    , "Agnus Dei: b": "http://www.youtube.com/watch?v=2zGyeRczFOA"
    , "Agnus Dei + organ": "http://www.youtube.com/watch?v=mSgyYDZvSAg"
    , "Agnus Dei: solo": "http://www.youtube.com/watch?v=EGJhMGk6PZw"
    , "Agnus Dei: + organ": "http://www.youtube.com/watch?v=cuDejOng0gY"
    , "Alma Redemptoris Mater: Female voices": "http://www.youtube.com/watch?v=QpGbTlmDluE"
    , "Alma Redemptoris Mater: Mixed voices": "http://www.youtube.com/watch?v=PXCE7lMMr8k"
    , "Alma Redemptoris Mater: Simple tone": "http://www.youtube.com/watch?v=iq5CKlOyeMk"
    , "Alma Redemptoris Mater: Solemn tone": "http://www.youtube.com/watch?v=L2F-ut_MU6E"
    , "Amicus Meus": "http://www.youtube.com/watch?v=JwGJxPpqJXA"
    , "Angelus Ad Pastores Ait": "http://www.youtube.com/watch?v=Sdz7N6gLR_4"
    , "Angelus Domini 1": "http://www.youtube.com/watch?v=Xg_bYZxFIFc"
    , "Angelus Domini 2":"http://www.youtube.com/watch?v=pPiriJsAWTc"
    , "Aqua Sapientiae": "http://www.youtube.com/watch?v=DFhC-xf9mHY"
    , "Ascendit Deus": "http://www.youtube.com/watch?v=98WwB7PU_3w"
    , "Asperges Me, Domine": "http://www.youtube.com/watch?v=uhk-fEcqgcY"
    , "Assumpta Est": "http://www.youtube.com/watch?v=1UfOFd-XHhY"
    , "Attende, Domine 1": "http://www.youtube.com/watch?v=YkA9pJSvjm0"
    , "Attende, Domine 2":"http://www.youtube.com/watch?v=4IwbxYYq3bA"
    , "Audi Filia": "http://www.youtube.com/watch?v=VYVDBSlwG-c"
    , "Ave Maria 1": "http://www.youtube.com/watch?v=LSAPvTeyfZk"
    , "Ave Maria 2": "http://www.youtube.com/watch?v=A9b0Wmoi2Tk"
    , "Ave Maris Stella": "http://www.youtube.com/watch?v=PlFaO_PdYE8"
    , "Ave mundi spes Maria": "http://www.youtube.com/watch?v=_MbDqc3x97k"
    , "Ave Regina Caelorum": "http://www.youtube.com/watch?v=OAi6T7tQruE"
    , "Ave Regina Caelorum 2": "http://www.youtube.com/watch?v=iVI1RLeXnlY"
    , "Ave Verum Corpus Natum": "http://www.youtube.com/watch?v=sZrJJTZQKlA"
    , "Beata Es, Virgo Maria": "http://www.youtube.com/watch?v=hH-c_j8kafM"
    , "Beata Viscera": "http://www.youtube.com/watch?v=t6orwO3w8og"
    , "Beatam Me": "http://www.youtube.com/watch?v=gB_uF2qcoSA"
    , "Beati Mundo Corde 1": "http://www.youtube.com/watch?v=fD-v9W9CsPI"
    , "Beati Mundo Corde 2":"http://www.youtube.com/watch?v=v0VOjezHZho"
    , "Beatus Servus": "http://www.youtube.com/watch?v=oZDOJVz6YKE"
    , "Beatus Vir Qui Suffert": "http://www.youtube.com/watch?v=qqvVjGzWcYw"
    , "Benedicta Es Tu": "http://www.youtube.com/watch?v=FTCsNdq7nzs"
    , "Benedicta et Venerabilis Es": "http://www.youtube.com/watch?v=VT7HQXzkJAA"
    , "Benedictus Dominus 1": "http://www.youtube.com/watch?v=W81rW_URkjs"
    , "Benedictus Dominus 2":"http://www.youtube.com/watch?v=6TVHFPGtxdg"
    , "Benedictus Qui Venit": "http://www.youtube.com/watch?v=3V_gTUgeNZk"
    , "Bonum est confiteri Domino": "http://www.youtube.com/watch?v=BQZ3BXDlRVk"
    , "Cantate Domino": "http://www.youtube.com/watch?v=7bpCNwlqnu0"
    , "Christus Factus Est 1": "http://www.youtube.com/watch?v=ULEVFGx9eqE"
    , "Christus Factus Est 2":"http://www.youtube.com/watch?v=nljNSVtTWn0"
    , "Christus Resurgens": "http://www.youtube.com/watch?v=CE3vHZPutq0"
    , "Christus Unam": "http://www.youtube.com/watch?v=_TkJ5_Gi7Tc"
    , "Circuibo": "http://www.youtube.com/watch?v=jJSa1D-Inw0"
    , "Civabit Eos 1": "http://www.youtube.com/watch?v=2L8YJ55RpdA"
    , "Civabit Eos 2":"http://www.youtube.com/watch?v=Q5euBO3Hqrw"
    , "CÓDICE CALIXTINO": "http://www.youtube.com/watch?v=sQ-98Cv68bg"
    , "Cognovit Autem Pater": "http://www.youtube.com/watch?v=AVEDFQ_IuCY"
    , "Commovisti, Domine 1": "http://www.youtube.com/watch?v=109UGRvF4ow"
    , "Commovisti, Domine 2":"http://www.youtube.com/watch?v=i-TsaaCS1MQ"
    , "Confirma Hoc Deus": "http://www.youtube.com/watch?v=CAjWHMK8xMA"
    , "Confitemini Domino": "http://www.youtube.com/watch?v=q2JEjEo2NGI"
    , "Constitues Eos": "http://www.youtube.com/watch?v=CliryvBc8tQ"
    , "Corde Natus ex Parentis 1": "http://www.youtube.com/watch?v=dGzD8DDxx0A"
    , "Corde Natus ex Parentis 2":"http://www.youtube.com/watch?v=-wZ508dZ7Zk"
    , "Creator Alme Siderum": "http://www.youtube.com/watch?v=YKbSZ4fDZqs"
    , "Credo: A": "http://www.youtube.com/watch?v=ikHM5-UzqGU"
    , "Credo: B": "http://www.youtube.com/watch?v=O6ACMsf9PsI"
    , "Credo: C": "http://www.youtube.com/watch?v=Ax_f8QSEHTE"
    , "Credo: D": "http://www.youtube.com/watch?v=yDortyyp228"
    , "Credo: I": "http://www.youtube.com/watch?v=N4BZkv7Aa7o"
    , "Credo: II": "http://www.youtube.com/watch?v=TaRXKjmMRrs"
    , "Credo: III": "http://www.youtube.com/watch?v=Ac8dnH2UPdQ"
    , "Credo: IV": "http://www.youtube.com/watch?v=Bycb5Fk7SZY"
    , "Credo: V": "http://www.youtube.com/watch?v=22-Amg3XrAg"
    , "Credo: VI": "http://www.youtube.com/watch?v=F7-iivVVYno"
    , "Custodi Me": "http://www.youtube.com/watch?v=bTR3TGjldc8"
    , "Da Pacem, Domine 1": "http://www.youtube.com/watch?v=eZgxaas-cEo"
    , "Da Pacem, Domine 2":"http://www.youtube.com/watch?v=Mn82EU4eOOY"
    , "Data Est Mihi": "http://www.youtube.com/watch?v=LyzhFEfR04s"
    , "De Profundis": "http://www.youtube.com/watch?v=597wi_oOjmU"
    , "De Profundis 1":"http://www.youtube.com/watch?v=81mqje9youA"
    , "De Profundis 2":"http://www.youtube.com/watch?v=BchdBdVROJE"
    , "De Profundis 3":"http://www.youtube.com/watch?v=Shj3oEEuG48"
    , "Dedit Dominus Confessionem Sancto Suo ": "http://www.youtube.com/watch?v=QrrSnKweft4"
    , "Deus, Deus Meus 1": "http://www.youtube.com/watch?v=HxjYWvF5ttc"
    , "Deus, Deus Meus 2":"http://www.youtube.com/watch?v=Ztm_vLGh2zA"
    , "Deus judex justus": "http://www.youtube.com/watch?v=IhGdX5toI5g"
    , "Deum Verum": "http://www.youtube.com/watch?v=kK5AohCMX0U"
    , "Dextera Domini 1": "http://www.youtube.com/watch?v=XgvTGPfp8Uc"
    , "Dextera Domini 2":"http://www.youtube.com/watch?v=sKcAoJkliRc"
    , "Dicite In Gentibus": "http://www.youtube.com/watch?v=SDDmOqN9jIE"
    , "Dies Irae 1": "http://www.youtube.com/watch?v=fCz_kNFludA"
    , "Dies Irae 2": "http://www.youtube.com/watch?v=dsn9LWh230k"
    , "Dies Irae 3":"http://www.youtube.com/watch?v=60f2dtXrsT8"
    , "Dies Sanctificatus": "http://www.youtube.com/watch?v=pv8lFyLgjN4"
    , "Dignus Est Agnus": "http://www.youtube.com/watch?v=JdqVwLh3L50"
    , "Dirigatur": "http://www.youtube.com/watch?v=-UUVckY2W2A"
    , "Domine convertere": "http://www.youtube.com/watch?v=08qNG7kFKnI"
    , "Domine, Dominus Noster": "http://www.youtube.com/watch?v=3oFWYbg6Cwc"
    , "Domine Jesu Christe": "http://www.youtube.com/watch?v=8SjzLy26xPA"
    , "Dominus Dicit": "http://www.youtube.com/watch?v=-87FP7qShfw"
    , "Dominus Dixit Ad Me": "http://www.youtube.com/watch?v=eMy188bQ7K4"
    , "Dominus firmamentum meum": "http://www.youtube.com/watch?v=6wSCfFENWrw"
    , "Dominus illuminatio mea": "http://www.youtube.com/watch?v=sgMonZf4zLc"
    , "Dominus in Sina": "http://www.youtube.com/watch?v=lGkFZD4Lo8M"
    , "Dominus Jesus": "http://www.youtube.com/watch?v=TFyq7BGVBpo"
    , "Dum Complerentur": "http://www.youtube.com/watch?v=FcuiJtmjfEs"
    , "Ecce Advenit": "http://www.youtube.com/watch?v=DeOOaOvwEMc"
    , "Ecce Sacerdos Magnus": "http://www.youtube.com/watch?v=HA0hA-07UyM"
    , "Ecce Vidimus Eum": "http://www.youtube.com/watch?v=130PnkUXPY0"
    , "Ecce Virgo": "http://www.youtube.com/watch?v=0GCC4xHbjTI"
    , "Eduxit Dominus": "http://www.youtube.com/watch?v=QEAxgr6yqEQ"
    , "Eduxit Eos Domine": "http://www.youtube.com/watch?v=1_okVGmhhKY"
    , "Eloisa et Abelardo": "http://www.youtube.com/watch?v=aulY_6tn6Bo"
    , "Emitte Spiritum Tuum": "http://www.youtube.com/watch?v=pyDHPxjiuBY"
    , "Erit Vobis": "http://www.youtube.com/watch?v=DiWOfXrHqRA"
    , "Esto Mihi": "http://www.youtube.com/watch?v=CFQ2HA1STzA"
    , "Exsurge": "http://www.youtube.com/watch?v=b6gn-Gmj9tk"
    , "Excita, Domine": "http://www.youtube.com/watch?v=vjZ54RVMZ10"
    , "Facta Est": "http://www.youtube.com/watch?v=XcLN7kEYcD0"
    , "Factus Est": "http://www.youtube.com/watch?v=le8rkxSICsg"
    , "Felix Es Sacra": "http://www.youtube.com/watch?v=V0GalIqRP7M"
    , "Flores Apparuerunt": "http://www.youtube.com/watch?v=kvRcGRTi_wE"
    , "Gaudeamus Omnes": "http://www.youtube.com/watch?v=3To5kWHSm5g"
    , "Gaudeamus omnes in Domino": "http://www.youtube.com/watch?v=r7nFmuNeA1Y"
    , "Gaudens Gaudebo": "http://www.youtube.com/watch?v=9wM4Rd88sNA"
    , "Gaudete Christus est natus": "http://www.youtube.com/watch?v=LDv_CoLjodo"
    , "Genuit Puerpera Regem": "http://www.youtube.com/watch?v=Gcolr6lmlIo"
    , "Gloria: I": "http://www.youtube.com/watch?v=gVLlP0uoSFg"
    , "Gloria: II": "http://www.youtube.com/watch?v=MTWuY_PUAsA"
    , "Gloria: III": "http://www.youtube.com/watch?v=FFHQcvHNobE"
    , "Gloria: IV": "http://www.youtube.com/watch?v=PyHDnhE5AL4"
    , "Gloria: V": "http://www.youtube.com/watch?v=SJlvwql_iDI"
    , "Gloria: VIII": "http://www.youtube.com/watch?v=Ny5s89sqf5A"
    , "Gloria: IX": "http://www.youtube.com/watch?v=wvp3df9e5Qk"
    , "Gloria: X": "http://www.youtube.com/watch?v=2PDJXG3wurU"
    , "Gloria in excelsis Deo": "http://www.youtube.com/watch?v=JM6qmf_C7pU"
    , "Gloria Laus": "http://www.youtube.com/watch?v=mX47Wj_UTQg"
    , "Gloriosa": "http://www.youtube.com/watch?v=_lyOZNdMw8Q"
    , "Gustate et videte": "http://www.youtube.com/watch?v=oWFNUQWdfAE"
    , "Haec dies quam fecit Dominus": "http://www.youtube.com/watch?v=KAxC-rtTUag"
    , "Haec Dies Quam Fecit Dominus": "http://www.youtube.com/watch?v=xxox8JF1gyw"
    , "Haec Dies 1": "http://www.youtube.com/watch?v=nvbChUi9Nzo"
    , "Haec Dies 2":"http://www.youtube.com/watch?v=9BC19QSC_a0"
    , "Hoc Corpus": "http://www.youtube.com/watch?v=O9aDwiaEYEA"
    , "Hodie Christus Natus Est": "http://www.youtube.com/watch?v=vynCA91HDGM"
    , "Hodie Christus natus Est": "http://www.youtube.com/watch?v=Lkoav0thwkg"
    , "Homo Quidem Fecit": "http://www.youtube.com/watch?v=sUmxUInFFfg"
    , "Homo Quidam": "http://www.youtube.com/watch?v=UYxBLLfMa8k"
    , "Hosanna Filio David": "http://www.youtube.com/watch?v=QotYtpW8Qx4"
    , "In Die Solemnitatis Vestrae": "http://www.youtube.com/watch?v=vlJHAsNzSTc"
    , "In Diebus Illis": "http://www.youtube.com/watch?v=UixeywBSVNM"
    , "In Exitu Israel": "http://www.youtube.com/watch?v=8yVw8tzIfuE"
    , "In Medio Ecclesiae": "http://www.youtube.com/watch?v=FEJr-9_ml4k"
    , "In Paradisum 1": "http://www.youtube.com/watch?v=Hg43i3Nsl9g"
    , "In Paradisum 2":"http://www.youtube.com/watch?v=S7F-N-Yd8dE"
    , "In Te Speravi 1": "http://www.youtube.com/watch?v=ssOglVIdIs4"
    , "In Te Speravi 2":"http://www.youtube.com/watch?v=1_8Nrx-67EY"
    , "Intellige Clamorem Meum": "http://www.youtube.com/watch?v=pWASO-EXKjo"
    , "Intonuit De Caelo": "http://www.youtube.com/watch?v=SsRU9fTLE4s"
    , "Introduxit Vos": "http://www.youtube.com/watch?v=RgEgbYItALE"
    , "Inviolata": "http://www.youtube.com/watch?v=GD1AOTNjqjc"
    , "Iste Confessor Domini": "http://www.youtube.com/watch?v=ste06UzUd6w"
    , "Jacta Cogitatum Tuum 1": "http://www.youtube.com/watch?v=ykmtiSgDANw"
    , "Jacta Cogitatum Tuum 2":"http://www.youtube.com/watch?v=Qwm88BmNap0"
    , "Jesu Redemptor Omnium": "http://www.youtube.com/watch?v=myx92VKB8lc"
    , "Jesum Tradidit": "http://www.youtube.com/watch?v=9g8RLl7GX90"
    , "Jesus Autem": "http://www.youtube.com/watch?v=fDDsBXYYZdU"
    , "Jubilate Deo 1": "http://www.youtube.com/watch?v=r3N-BwmF1BE"
    , "Jubilate Deo 2":"http://www.youtube.com/watch?v=BdCLmAKjjYE"
    , "Jubilate Deo 3":"http://www.youtube.com/watch?v=lU17YmUTKHc"
    , "Juravit": "http://www.youtube.com/watch?v=ifI825uTmDI"
    , "Justitiae Domini": "http://www.youtube.com/watch?v=bjVsqIKMqAA"
    , "Justorum Animae": "http://www.youtube.com/watch?v=nNS6auBRlF0"
    , "Justus Germinabit": "http://www.youtube.com/watch?v=7MN6TTp24io"
    , "Justus ut Palma Florebit": "http://www.youtube.com/watch?v=S-PRXkKUIg0"
    , "Kyrie: a": "http://www.youtube.com/watch?v=GDL-AzHq7vY"
    , "Kyrie: b": "http://www.youtube.com/watch?v=44GXf67CA54"
    , "Kyrie: Fons Bonitatis": "http://www.youtube.com/watch?v=dGKqS0nubh0"
    , "Kyrie: I": "http://www.youtube.com/watch?v=KnBzUj_K3Ic"
    , "Kyrie: IV": "http://www.youtube.com/watch?v=EMv4du5CQzk"
    , "Kyrie: VIII": "http://www.youtube.com/watch?v=O4T4BkXvSPw"
    , "Kyrie: IX ": "http://www.youtube.com/watch?v=5dDrx7Mmm4s"
    , "Kyrie: X": "http://www.youtube.com/watch?v=DpyKPYrTCcA"
    , "Kyrie: XI": "http://www.youtube.com/watch?v=SHx8PIjP34U"
    , "Kyrie: XIV": "http://www.youtube.com/watch?v=pqDIEjQfdNk"
    , "Kyrie: XVII": "http://www.youtube.com/watch?v=22W_JsYiwCc"
    , "Kyrie: XVIII": "http://www.youtube.com/watch?v=KcZfFfOjl8U"
    , "Kyrie: + organ": "http://www.youtube.com/watch?v=dG-gOLUnAN0"
    , "Laetatus Sum 1": "http://www.youtube.com/watch?v=_CTirEb68B0"
    , "Laetatus Sum 2":"http://www.youtube.com/watch?v=JImOPIV0Q0U"
    , "Laetetur cor": "http://www.youtube.com/watch?v=Rd-IqnC5VEw"
    , "Lauda Sion Salvatorem 1": "http://www.youtube.com/watch?v=74rxEWEektY"
    , "Lauda Sion Salvatorem 2":"http://www.youtube.com/watch?v=z3b8AYnx6Qc"
    , "Laudate Deum": "http://www.youtube.com/watch?v=j58FD0tq7Zw"
    , "Laudate Pueri Dominum": "http://www.youtube.com/watch?v=o-UKW4N0Egs"
    , "Libera Me": "http://www.youtube.com/watch?v=YnXpsJMqewo"
    , "Lux fulgebit": "http://www.youtube.com/watch?v=lrIgvzkPFzE"
    , "Lauda Sion Salvatorem":"http://www.youtube.com/watch?v=qjyFJBABHFw"
    , "Libera me, Domine": "http://www.youtube.com/watch?v=e28H76aT0DY"
    , "Lumen ad revelationem gentium": "http://www.youtube.com/watch?v=01_vzG8myig"
    , "Lux Aeterna": "http://www.youtube.com/watch?v=X6V8GxBZjxg"
    , "Magnificat anima mea Dominum": "http://www.youtube.com/watch?v=fEzkj8v0fhQ"
    , "Magnificat": "http://www.youtube.com/watch?v=EXub6v3e8-Y"
    , "Midnight Mass": "http://www.youtube.com/watch?v=Ye-HAS7NUrE"
    , "Montes Gilboe": "http://www.youtube.com/watch?v=pAdu_q3EVRQ"
    , "Multifarie Olim": "http://www.youtube.com/watch?v=e7yN9HQNFuc"
    , "Nos autem 1": "http://www.youtube.com/watch?v=-LULYhsQH4E"
    , "Nos autem 2":"http://www.youtube.com/watch?v=fMcwzU7oTTE"
    , "Nunc Scio Vere": "http://www.youtube.com/watch?v=LvT2siwqZCI"
    , "O Adonai": "http://www.youtube.com/watch?v=dn1cloz0ssQ"
    , "O Clavis David": "http://www.youtube.com/watch?v=fDg29sswhgQ"
    , "O Emmanuel": "http://www.youtube.com/watch?v=wdu0HjiLEn4"
    , "O Oriens": "http://www.youtube.com/watch?v=1BsZH7e27Dg"
    , "O Radix Jesse": "http://www.youtube.com/watch?v=VFE7B-DZ8_w"
    , "O Rex Gentium": "http://www.youtube.com/watch?v=5GvDvgfLoUo"
    , "O Sapientia 1": "http://www.youtube.com/watch?v=8ngcQDQfhlA"
    , "O Sapientia 2":"http://www.youtube.com/watch?v=S6zaiZxJIpU"
    , "Odoriferum lilium": "http://www.youtube.com/watch?v=GkdtYIPN9ic"
    , "Oliva fructifera": "http://www.youtube.com/watch?v=bSth8RbeZyc"
    , "Omnes de Saba": "http://www.youtube.com/watch?v=7o8K7neGyt4"
    , "Oportebat Pati Christum": "http://www.youtube.com/watch?v=H7vVeoylbDw"
    , "Ostende Nobis": "http://www.youtube.com/watch?v=d_E8FqDhNLw"
    , "Os Justi Meditabitur": "http://www.youtube.com/watch?v=QQ-dbbilo1Y"
    , "Pange Lingua": "http://www.youtube.com/watch?v=j3TmQr0h7ew"
    , "Pange Lingua (Corpus Christi)": "http://www.youtube.com/watch?v=U-AsvDn87fo"
    , "Panis": "http://www.youtube.com/watch?v=hs5yOzAoFX4"
    , "Pater Noster": "http://www.youtube.com/watch?v=krrvQuesZRI"
    , "Paucitas diérum me": "http://www.youtube.com/watch?v=iNKN8UQbeFQ"
    , "Populus Acquisitionis": "http://www.youtube.com/watch?v=e_ZB7wKU5V8"
    , "Populus Sion": "http://www.youtube.com/watch?v=_PqIlx5w_24"
    , "Portae Caeli": "http://www.youtube.com/watch?v=bpDLvW5MPbM"
    , "Post Partum": "http://www.youtube.com/watch?v=ODqQFYfTloo"
    , "Potum Meum": "http://www.youtube.com/watch?v=6e9tmQju4fo"
    , "Prope Est Dominus": "http://www.youtube.com/watch?v=c89q42GMQtc"
    , "Psallite Domino 1": "http://www.youtube.com/watch?v=fM0RtUFVPtY"
    , "Psallite Domino 2":"http://www.youtube.com/watch?v=fM0RtUFVPtY"
    , "Puer natus est 1": "http://www.youtube.com/watch?v=sp-fWQxbtq0"
    , "Puer natus est 2":"http://www.youtube.com/watch?v=ASpva3d1VEw"
    , "Puer natus est 3":"http://www.youtube.com/watch?v=lfwuZaf6WXw"
    , "Pueri Hebraeorum": "http://www.youtube.com/watch?v=9w-z5U1EHZU"
    , "Qui manducat": "http://www.youtube.com/watch?v=uuHGimoNH-k"
    , "Qui Posuit": "http://www.youtube.com/watch?v=WQFZJLkJ3Tg"
    , "Qui sedes Domine": "http://www.youtube.com/watch?v=LjV7r32izjw"
    , "Qui Sedes Domine": "http://www.youtube.com/watch?v=LjV7r32izjw"
    , "Quomodo Sedet Solo": "http://www.youtube.com/watch?v=bZUa7tqhELU"
    , "Quotiescumque": "http://www.youtube.com/watch?v=v1spC16XqCQ"
    , "Recordare, Virgo Mater": "http://www.youtube.com/watch?v=Bg5MGsV0mTA"
    , "Reges Tharsis": "http://www.youtube.com/watch?v=aCJU7dtkho4"
    , "Regina Caeli 1": "http://www.youtube.com/watch?v=rXJbSJmb1vg"
    , "Regina Caeli 2":"http://www.youtube.com/watch?v=6-EJiI_yAas"
    , "Repleatur": "http://www.youtube.com/watch?v=5QUxD3IlzfA"
    , "Requiem Aeternam 1": "http://www.youtube.com/watch?v=-zpHs8bf4k4"
    , "Requiem Aeternam 2":"http://www.youtube.com/watch?v=TjrsqJaLDOg"
    , "Respira": "http://www.youtube.com/watch?v=Aoj2kGBddRA"
    , "Responsorium: Ecce quomodo": "http://www.youtube.com/watch?v=sKm54iQ1i-M"
    , "Resurrexi 1": "http://www.youtube.com/watch?v=LNstcQnf6vs"
    , "Resurrexi 2":"http://www.youtube.com/watch?v=rKcRi6hLaE8"
    , "Rorate Caeli 1": "http://www.youtube.com/watch?v=lKWZaopi_sY"
    , "Rorate Caeli 2": "http://www.youtube.com/watch?v=f06qdhO_sEY&NR=1&feature=endscreen"
    , "Rorate Caeli 3": "http://www.youtube.com/watch?v=S0Rv5F88WYA"
    , "Salve Festa Dies": "http://www.youtube.com/watch?v=XL6iIj3ZA6U"
    , "Salve Regina (Simple Tone)": "http://www.youtube.com/watch?v=CAmydVsNMqM"
    , "Salve Regina (Solemn Tone)": "http://www.youtube.com/watch?v=0OIDAc-zFkY"
    , "Salve Sancta Parens": "http://www.youtube.com/watch?v=o_up2KooWcE"
    , "Sanctum Domini lambertum": "http://www.youtube.com/watch?v=D5yG3DmuUDs"
    , "Sanctus: A": "http://www.youtube.com/watch?v=W7aAav4f4o0"
    , "Sanctus: B": "http://www.youtube.com/watch?v=hAiECJf5Ouo"
    , "Sanctus: C 1": "http://www.youtube.com/watch?v=y6wwEZ41Z4c"
    , "Sanctus: C 2":"http://www.youtube.com/watch?v=rvAd0tp0Urs"
    , "Sanctus: I": "http://www.youtube.com/watch?v=1JXcSmSLfbI"
    , "Sanctus: III": "http://www.youtube.com/watch?v=M-jwPnDwLoM"
    , "Sanctus: IV": "http://www.youtube.com/watch?v=BYqqKOQGPcA"
    , "Sanctus: VIII": "http://www.youtube.com/watch?v=zjmrltyMJtM"
    , "Sanctus: IX": "http://www.youtube.com/watch?v=xgL_IBUh3ps"
    , "Sanctus: X": "http://www.youtube.com/watch?v=_b6IjvHPxjY"
    , "Sanctus: XI": "http://www.youtube.com/watch?v=Guq_Y0vKzqw"
    , "Sanctus: XIV": "http://www.youtube.com/watch?v=sw1qfp00Pgk"
    , "Sanctus: XVII": "http://www.youtube.com/watch?v=lTFHtWV6K_w"
    , "Sanctus: XVIII": "http://www.youtube.com/watch?v=BxZobRDmVDc"
    , "Sedebit Dominus": "http://www.youtube.com/watch?v=150opgLv9Fw"
    , "Si Consurrexistis": "http://www.youtube.com/watch?v=3VTWWlsL4WY"
    , "Sicut Cervus": "http://www.youtube.com/watch?v=Cr9cjzv3qCI"
    , "Signum Magnum 1": "http://www.youtube.com/watch?v=L08CHi5hgaI"
    , "Signum Magnum 2":"http://www.youtube.com/watch?v=RCRkXomjyEY"
    , "Solis, O Virgo": "http://www.youtube.com/watch?v=Hj3MXFe_pKM"
    , "Solemnitas": "http://www.youtube.com/watch?v=TBiLFgpIMWk"
    , "Spiritus Domini": "http://www.youtube.com/watch?v=Yo4KTWIt2oQ"
    , "Spiritus Domini 1":"http://www.youtube.com/watch?v=nzNz09-qBUY"
    , "Surrexit Christus Qui": "http://www.youtube.com/watch?v=IIt9zuH88mk"
    , "Surrexit Dominus": "http://www.youtube.com/watch?v=7hNqWGNZLuc"
    , "Spiritus Domini 2":"http://www.youtube.com/watch?v=FYQ8aWriyys"
    , "Stabat Mater Dolorosa": "http://www.youtube.com/watch?v=HJ_nGZU439g"
    , "Sub Tuum Praesidium": "http://www.youtube.com/watch?v=gSmykQ9DLOg"
    , "Tantum Ergo 1": "http://www.youtube.com/watch?v=VHtlAqkwhH0"
    , "Tantum Ergo 2":"http://www.youtube.com/watch?v=wIhIDHwccdY"
    , "Tantum Ergo 3":"http://www.youtube.com/watch?v=GeMCuTaf04Q"
    , "Tantum Ergo 4":"http://www.youtube.com/watch?v=izewFtLgq2I"
    , "Te Deum laudamus 1": "http://www.youtube.com/watch?v=sqwV9l-U8ds"
    , "Te Deum laudamus 2":"http://www.youtube.com/watch?v=sLwBlTaOGIQ"
    , "Te Lucis Ante Terminum: A": "http://www.youtube.com/watch?v=bw_Oaa1m-do"
    , "Te Lucis Ante Terminum: B": "http://www.youtube.com/watch?v=-nEUHkEfuH4"
    , "Te Lucis Ante Terminum: C": "http://www.youtube.com/watch?v=2W1ZlJg7P04"
    , "Te Lucis Ante Terminum: D": "http://www.youtube.com/watch?v=kS3lKtpN-RU"
    , "Te Lucis Ante Terminum: E": "http://www.youtube.com/watch?v=CagC4beh_Pg"
    , "Te Lucis Ante Terminum: F": "http://www.youtube.com/watch?v=jg89ynz75ZA"
    , "Te Lucis Ante Terminum: G": "http://www.youtube.com/watch?v=kw_EYeKwCQM"
    , "Te Lucis Ante Terminum: H": "http://www.youtube.com/watch?v=YhQraTirLQI"
    , "Te Lucis Ante Terminum: I": "http://www.youtube.com/watch?v=lrHWr_CcvKU"
    , "Te Saeculorum Principem": "http://www.youtube.com/watch?v=kWQr2aZXIIY"
    , "Tecum Principium": "http://www.youtube.com/watch?v=Y8doUj6O198"
    , "Tenebrae Factae Sunt": "http://www.youtube.com/watch?v=vE6O-a5pc50"
    , "Terra Tremuit": "http://www.youtube.com/watch?v=Nd27Ewu_Lr8"
    , "Testamentum Aeternum": "http://www.youtube.com/watch?v=74d3gWJOV-4"
    , "The Seven Sorrows of Mary": "http://www.youtube.com/watch?v=8KPgTUDhSkc"
    , "Tota Pulchra Es, Maria": "http://www.youtube.com/watch?v=AckG5Q2R5nw"
    , "Trisagion": "http://www.youtube.com/watch?v=uW32lLNDa4k"
    , "Tu Es Petrus": "http://www.youtube.com/watch?v=6wi-sqg93LA"
    , "Ubi Caritas 1": "http://www.youtube.com/watch?v=b_QEP-RHYLY"
    , "Ubi Caritas 2":"http://www.youtube.com/watch?v=znJDWsv-Osw"
    , "Ubi Caritas 3":"http://www.youtube.com/watch?v=8Ep3o7g0Yrw"
    , "Universi": "http://www.youtube.com/watch?v=lC0CyAe-llA"
    , "Veni Creator Spiritus 1": "http://www.youtube.com/watch?v=Kphky63gK5I"
    , "Veni Creator Spiritus 2":"http://www.youtube.com/watch?v=Kphky63gK5I"
    , "Veni Creator Spiritus 3":"http://www.youtube.com/watch?v=VnUJWDEQDW4"
    , "Veni Domine": "http://www.youtube.com/watch?v=nNHczkxCGrI"
    , "Veni veni Emmanuel 1": "http://www.youtube.com/watch?v=IjUHjJ_frtg"
    , "Veni veni Emmanuel 2":"http://www.youtube.com/watch?v=J1QG554QQiU"
    , "Veni Sancte Spiritus 1": "http://www.youtube.com/watch?v=Z6hqAfsHURo"
    , "Veni Sancte Spiritus 2":"http://www.youtube.com/watch?v=qRkJhfbNWrQ"
    , "Venite Benedicti": "http://www.youtube.com/watch?v=5KQafTckDf8"
    , "Vere Tu Es": "http://www.youtube.com/watch?v=axfV31IRmXk"
    , "Victimae Paschali": "http://www.youtube.com/watch?v=sAo30la5fUE"
    , "Victricem Manum Tuam": "http://www.youtube.com/watch?v=ULrcvfVnqKA"
    , "Video Caelos Apertos": "http://www.youtube.com/watch?v=IgE5apvJvtM"
    , "Viderunt Omnes": "http://www.youtube.com/watch?v=EN73kO2_PZA"
    , "Vidi Aquam": "http://www.youtube.com/watch?v=zTBi126OWkQ"
    , "Vidimus Stellam": "http://www.youtube.com/watch?v=eRzuz5QFH8w"
    , "Virga Jesse Floruit": "http://www.youtube.com/watch?v=0oCjm3PBTAg"
    , "Virgo Prudentissima": "http://www.youtube.com/watch?v=Q-jGa7hIk6Y"
    , "Viri Galilaei": "http://www.youtube.com/watch?v=0G2j5qktpE4"
    , "Vocem Jucunditatis": "http://www.youtube.com/watch?v=hP7ii4451Oo"
    , "Vultum Tuum": "http://www.youtube.com/watch?v=ohB3hdVLE-0"
  };




  return printObj(gregorianaObj);
}; // end of gregoriana

//===========================================================================
function health(){
  document.getElementById("display_pane").innerHTML=healthFun();
}

var healthFun = function(){

  var healthObj = {
    "Abs Diet":"http://www.absdiet.com/uof/absdiet/abospl/index.html"
    , "Apple":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1809/2"
    , "Banana":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1846/2"
    , "tongue":"http://nutritiondata.self.com/facts/beef-products/3482/2"
    , "Bread, Multy-grain":"http://nutritiondata.self.com/facts/baked-products/4846/2"
    , "breast":"http://nutritiondata.self.com/facts/poultry-products/703/2"
    , "leg":"http://nutritiondata.self.com/facts/poultry-products/721/2"
    , "Egg":"http://nutritiondata.self.com/facts/dairy-and-egg-products/117/2"
    , "Exercise finder": "http://www.bodybuilding.com/exercises/finder/lookup/filter/muscle/id/6/muscle/neck"
    , "Everest Climb": "http://www.youtube.com/watch?v=84Xh1PoQvlA"
    , "Grapes":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1920/2"
    , "High-Protein Foods":"http://lowcarbdiets.about.com/od/whattoeat/a/highproteinfood.htm"
    , "Life Fitness":"http://www.lifefitness.com/index.html"
    , "Nutrition Data":"http://nutritiondata.self.com/"
    , "Nutrition Facts Label":"http://www.fda.gov/food/resourcesforyou/consumers/nflpm/ucm274593.htm"
    , "Nutrition Value":"http://www.nutritionvalue.org/"
    , "Potato":"http://nutritiondata.self.com/facts/vegetables-and-vegetable-products/2908/2"
    , "Protein-full Foods":"http://www.healthaliciousness.com/articles/foods-highest-in-protein.php"
    , "Protein Foods":"http://www.fitday.com/fitness-articles/fitness/body-building/the-best-protein-foods-for-building-muscle.html"
    , "Raspberry":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/2053/2"
    , "Strawberry":"http://nutritiondata.self.com/facts/fruits-and-fruit-juices/2064/2"

  };

  
  return printObj(healthObj);
};

//----------------------------------------------------------------------------
function html5(){
  document.getElementById("display_pane").innerHTML=html5Fun();
}
var html5Fun = function(){

  var html5Obj = {
   "addColorStop()":"http://www.w3schools.com/tags/canvas_addcolorstop.asp"
   , "arc()":"http://www.w3schools.com/tags/canvas_arc.asp"
   , "beginPath()":"http://www.w3schools.com/tags/canvas_beginpath.asp"
   , "canvas":"http://www.w3schools.com/html/html5_canvas.asp"
   , "createLinearGradient()":"http://www.w3schools.com/tags/canvas_createlineargradient.asp"
   , "createRadialGradient()":"http://www.w3schools.com/tags/canvas_createradialgradient.asp"
   , "fillRect()":"http://www.w3schools.com/tags/canvas_fillrect.asp"
   , "fillStyle":"http://www.w3schools.com/tags/canvas_fillstyle.asp"
   , "fillText()":"http://www.w3schools.com/tags/canvas_filltext.asp"
   , "font=":"http://www.w3schools.com/tags/canvas_font.asp"
   , "getElementById()":"http://www.w3schools.com/jsref/met_doc_getelementbyid.asp"
   , "drawImage()":"http://www.w3schools.com/tags/canvas_drawimage.asp"
   , "input tag" : "http://www.w3schools.com/tags/tag_input.asp"
   , "lineTo()":"http://www.w3schools.com/tags/canvas_lineto.asp"
   , "moveTo()":"http://www.w3schools.com/tags/canvas_moveto.asp"
   , "onclick" : "http://www.w3schools.com/jsref/event_onclick.asp"
   , "stroke()":"http://www.w3schools.com/tags/canvas_stroke.asp"
   , "strokeText()":"http://www.w3schools.com/tags/canvas_stroketext.asp"
 };


 return printObj(html5Obj);

};

//----------------------------------------------------------------------------

function its(){
  document.getElementById("display_pane").innerHTML= its2();
};

var its2 = function (){

  var itstuffObj = {
    "12-factor app":"http://www.12factor.net/"
    , "Allhands 2013":"https://wiki.mozilla.org/Allhands2013"
    , "Allhands 2013 agenda":"https://etherpad.mozilla.org/allhandsmay2013agenda"
    , "ARM":"http://www.arm.com/"
    , "ASP.NET":"http://www.asp.net/"
    , "Bin/Deci/Hex Convertor ":"http://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html"
    , "Blog 001":"http://igoryen.wordpress.com/2013/05/10/my-first-blog-about-my-first-week-at-seneca-cdot/"
    , "Blog 002":"http://igoryen.wordpress.com/2013/05/17/cdot-week-2/"
    , "Blog 003":"http://igoryen.wordpress.com/2013/05/26/cdot-week-3-and-mozilla-allhands/"
    , "Blog 004":"http://igoryen.wordpress.com/2013/05/31/week-22-week-4-at-cdot/"
    , "Blog 005":"http://igoryen.wordpress.com/2013/06/09/cdot-week-5/"
    , "Blog 006":"http://igoryen.wordpress.com/2013/06/14/mocha-unit-testing-the-simplest-example-var-assert/"
    , "Blog 007":"http://igoryen.wordpress.com/2013/06/23/setting-up-servers-to-run-locally/"
    , "Branching model, a":"http://nvie.com/posts/a-successful-git-branching-model/"
    , "Cloud9 IDE" : "https://c9.io/"
    , "Config":"http://www.12factor.net/config"
    , "CSS Validator":"http://jigsaw.w3.org/css-validator/"
    , "cURL":"http://curl.haxx.se/"
    , "Curly braces position":"http://programmers.stackexchange.com/questions/2715/should-curly-braces-appear-on-their-own-line"
    , "Currant":"http://currant.herokuapp.com/"
    , "Dashboard":"https://wiki.mozilla.org/Webmaker/Communications/Dashboard"
    , "Debuggable":"http://debuggable.com/"
    , "Easy open source workflow":"http://www.thecssdiv.co.uk/2013/04/easy-open-source-workflow/"
    , "Eloquent JavaScript":"http://eloquentjavascript.net/contents.html"
    , "Etherpad 1":"https://etherpad.mozilla.org/cdotsupplies"
    , "Etherpad 2":"https://etherpad.mozilla.org/0GXDuRZRWL"
    , "Express.js":"http://expressjs.com/"
    , "guide":"http://expressjs.com/guide.html"
    , "API":"http://expressjs.com/api.html"
    , "Fedora":"http://fedoraproject.org/wiki/Fedora_Project_Wiki"
    , "Frictionless Context switching":"http://git-scm.com/about#Frictionless_Context_Switching"
    , "GetFireBug":"http://getfirebug.com/"
    , "gettext":"http://www.gnu.org/software/gettext/"
    , "Glassfish":"http://glassfish.java.net/"
    , "GoDaddy":"https://ca.godaddy.com/"
    , "Grunt js":"http://gruntjs.com/"
    , "Hacks":"https://hacks.mozilla.org/"
    , "Heroku":"https://www.heroku.com/"
    , "HTML5 on w3schools":"http://www.w3schools.com/html/html5_intro.asp"
    , "HTML color names ":"http://www.w3schools.com/html/html_colorvalues.asp"
    , "HTML color wheel ":"http://www.ficml.org/jemimap/style/color/wheel.html"
    , "HTML Validator":"http://validator.w3.org/"
    , "HTTP headers":"http://net.tutsplus.com/tutorials/other/http-headers-for-dummies/"
    , "HomeBrew":"http://mxcl.github.io/homebrew/"
    , "i18n":"http://www.lingotek.com/images/pdf/Lingotek_Internationalization_101_Webinar_07_31_12.pdf"
    , "IRC ref":"http://www.ircbeginner.com/ircinfo/ircc-commands.html"
    , "iTerm2" : "http://www.iterm2.com/#/section/home"
    , "JASON":"http://json.org/"
    , "JASOLint":"http://jsonlint.com/"
    , "API":"http://docs.oracle.com/javase/6/docs/api/"
    , "Java Samples":"http://www.java-samples.com/java/"
    , "Java World ":"http://www.javaworld.com/?attr=ifw_jwlogo"
    , "Kieran`s Blog":"http://sedgestuff.wordpress.com/"
    , "Lynda.com":"http://www.lynda.com/"
    , "Mac Essentials":"https://etherpad.mozilla.org/macessentials"
    , "MacPorts" : "http://www.macports.org/"
    , "Mongo DB":"http://www.mongodb.org/"
    , "Mozilla Developer Network":"https://developer.mozilla.org/en-US/"
    , "Mozilla Foundation":"http://www.mozilla.org/foundation/"
    , "Mozilla Wiki":"https://wiki.mozilla.org/Main_Page"
    , "Moving from MacPorts to Homebrew" : "http://bitboxer.de/2010/06/03/moving-from-macports-to-homebrew/"
    , "MSDN Library ":"http://msdn.microsoft.com/library/default.aspx"
    , "NetBeans.org":"http://netbeans.org/index.html"
    , "npm: intro":"http://howtonode.org/introduction-to-npm"
    , "Open Source @ Seneca":"http://zenit.senecac.on.ca/wiki/index.php/Main_Page"
    , "Open source development":"https://sedgestuff.wordpress.com/2013/04/23/welcome-to-open-source-development-a-students-perspective/comment-page-1/#comment-14"
    , "Open Source Workflow":"http://www.thecssdiv.co.uk/2013/04/easy-open-source-workflow/"
    , "PasteBin.Mozilla.org":"http://pastebin.mozilla.org/"
    , "Persona":"https://login.persona.org/"
    , "PHP functions ":"http://php.net/quickref.php"
    , "PHP manual ":"http://php.net/manual/en/index.php"
    , "PO files format":"http://www.gnu.org/software/gettext/manual/html_node/PO-Files.html"
    , "popcorn":"http://popcornjs.org/"
    , "popcorn maker":"https://popcorn.webmaker.org/"
    , "Processing.js ":"http://processingjs.org/"
    , "Profile backup":"http://kb.mozillazine.org/Profile_backup"
    , "Redis":"http://redis.io/"
    , "RegEx calculator ":"http://www.homemarketeer.com/sbs/regular_expression.html"
    , "RegEx pal":"http://regexpal.com/"
    , "Require.js":"http://requirejs.org/"
    , "Require.js I18N bundle":"http://requirejs.org/docs/api.html#i18n"
    , "Solarized":"http://ethanschoonover.com/solarized"
    , "Stack Overflow ":"http://stackoverflow.com/"
    , "Sublime Text":"http://www.sublimetext.com/"
    , "Sublime as default editor" : "https://gist.github.com/artero/1236170"
    , "Sublime Text Tut":"https://tutsplus.com/course/improve-workflow-in-sublime-text-2/"
    , "Sublime Text on Fedora":"https://gist.github.com/dantoncancella/4977978"
    , "Tech On The Net ":"http://www.techonthenet.com/index.php"
    , "ToDo list":"http://zenit.senecac.on.ca/wiki/index.php/Webmaker_Summer_2013_TODO"
    , "tree on Mac":"http://shaunchapman.me/post/329270449/how-to-install-the-tree-command-on-mac-os-x"
    , "Tutorial`s Point":"http://www.tutorialspoint.com/java/index.htm"
    , "VLSM subnet calculator":"http://www.vlsm-calc.net/"
    , "VM on Linux":"http://senecacd.wordpress.com/2012/11/07/creating-a-virtual-machine-on-linux-with-kvm-qemu-and-virt/"
    , "w3schools":"http://www.w3schools.com/"
    , "WebMaker":"https://webmaker.org/en-US/"
    , "Wiki":"https://wiki.mozilla.org/Webmaker"
    , "Website with SQL db ":"http://www.windowsazure.com/en-us/develop/net/tutorials/web-site-with-sql-database/"

  };

  return printObj(itstuffObj);
};

//----------------------------------------------------------------------------

function itt(){
  document.getElementById("display_pane").innerHTML= itt2();
};

var itt2 = function (){

  var ittermsObj = {
    "5xx Server Error":"http://en.wikipedia.org/wiki/500_Internal_Server_Error#5xx_Server_Error"
    , "ABNF":"http://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_Form"
    , "Abstraction":"http://en.wikipedia.org/wiki/Abstraction_%28computer_science%29"
    , "Abstraction layer":"http://en.wikipedia.org/wiki/Abstraction_layer"
    , "Address bar" : "http://en.wikipedia.org/wiki/Address_bar"
    , "Android":"http://en.wikipedia.org/wiki/Android_%28operating_system%29"
    , "Apache bench":"http://en.wikipedia.org/wiki/ApacheBench"
    , "Apache HTTP server":"http://en.wikipedia.org/wiki/Apache_HTTP_Server"
    , "API":"https://en.wikipedia.org/wiki/Application_programming_interface"
    , "Application layer":"http://en.wikipedia.org/wiki/Application_layer"
    , "Applications":"http://en.wikipedia.org/wiki/Distributed_application#Applications"
    , "API":"http://en.wikipedia.org/wiki/Application_programming_interface"
    , "Application software":"http://en.wikipedia.org/wiki/Software_application"
    , "ARM architecture":"http://en.wikipedia.org/wiki/ARM_architecture"
    , "Asynchronous I/O":"http://en.wikipedia.org/wiki/Asynchronous_I/O"
    , "AVI":"http://en.wikipedia.org/wiki/Audio_Video_Interleave"
    , "Base64":"https://en.wikipedia.org/wiki/Base64"
    , "Booting (up)":"http://en.wikipedia.org/wiki/Booting"
    , "Bootstrapping":"http://en.wikipedia.org/wiki/Bootstrapping_%28compilers%29"
    , "Branching":"https://en.wikipedia.org/wiki/Branching_(revision_control)"
    , "Bug tracking system":"http://en.wikipedia.org/wiki/Bug_tracking_system"
    , "Bundled software":"http://en.wikipedia.org/wiki/Bundle_%28software_distribution%29"
    , "Bus":"http://en.wikipedia.org/wiki/Computer_bus"
    , "Callback":"http://en.wikipedia.org/wiki/Callback_%28computer_programming%29"
    , "Call stack":"http://en.wikipedia.org/wiki/Call_stack"
    , "CDN":"https://en.wikipedia.org/wiki/Content_delivery_network"
    , "Changeset":"http://en.wikipedia.org/wiki/Changeset"
    , "Checksum":"http://en.wikipedia.org/wiki/Checksum"
    , "CLI":"http://en.wikipedia.org/wiki/Command-line_interface"
    , "Client":"http://en.wikipedia.org/wiki/Client_%28computing%29"
    , "Client-server model":"http://en.wikipedia.org/wiki/Client-server_model"
    , "Client-side":"http://en.wikipedia.org/wiki/Client-side"
    , "Clock signal":"http://en.wikipedia.org/wiki/Clock_cycle"
    , "Closure":"http://en.wikipedia.org/wiki/Closure_%28computer_science%29"
    , "Cloud computing":"http://en.wikipedia.org/wiki/Cloud_computing"
    , "Cloud Foundry":"http://en.wikipedia.org/wiki/Cloud_Foundry"
    , "CMS":"http://en.wikipedia.org/wiki/Content_management_system"
    , "Computing platform ":"http://en.wikipedia.org/wiki/Computing_platform"
    , "Concatenation":"http://en.wikipedia.org/wiki/Concatenation"
    , "Concern":"http://en.wikipedia.org/wiki/Concern_%28computer_science%29"
    , "Configuration file":"http://en.wikipedia.org/wiki/Configuration_file"
    , "Control flow":"http://en.wikipedia.org/wiki/Program_flow"
    , "Coupling":"http://en.wikipedia.org/wiki/Dependency_%28computer_science%29"
    , "CPU":"http://en.wikipedia.org/wiki/Central_processing_unit"
    , "CPU design":"http://en.wikipedia.org/wiki/CPU_design"
    , "Crowdsourcing":"http://en.wikipedia.org/wiki/Crowdsourcing"
    , "CSS":"http://en.wikipedia.org/wiki/CSS_stylesheet"
    , "cURL":"http://en.wikipedia.org/wiki/CURL"
    , "CVS":"http://en.wikipedia.org/wiki/Concurrent_Versions_System"
    , "Database":"http://en.wikipedia.org/wiki/Database_management_system"
    , "Database schema":"http://en.wikipedia.org/wiki/Database_schema"
    , "Delimiter" : "http://en.wikipedia.org/wiki/Delimiter"
    , "Delta differencing":"http://en.wikipedia.org/wiki/Data_differencing"
    , "Delta encoding":"http://en.wikipedia.org/wiki/Delta_encoding"
    , "Design Engineer":"http://en.wikipedia.org/wiki/Design_engineer"
    , "Device driver":"http://en.wikipedia.org/wiki/Device_driver"
    , "Directory structure":"http://en.wikipedia.org/wiki/Directory_structure"
    , "DOM":"http://en.wikipedia.org/wiki/Document_Object_Model"
    , "DRM":"http://en.wikipedia.org/wiki/Digital_rights_management"
    , "DTD":"http://en.wikipedia.org/wiki/Document_Type_Definition"
    , "EDA":"http://en.wikipedia.org/wiki/Event-driven_architecture"
    , "EDP":"http://en.wikipedia.org/wiki/Event-driven_programming"
    , "EJS":"https://en.wikipedia.org/wiki/EJS"
    , "Elasticsearch":"http://en.wikipedia.org/wiki/ElasticSearch"
    , "Environment variable":"http://en.wikipedia.org/wiki/Environment_variable"
    , "Etherpad":"http://en.wikipedia.org/wiki/Etherpad"
    , "Event":"http://en.wikipedia.org/wiki/Event_%28computing%29"
    , "Event loop":"http://en.wikipedia.org/wiki/Main_loop"
    , "Executable":"https://en.wikipedia.org/wiki/Executable"
    , "FDX":"http://en.wikipedia.org/wiki/Full-duplex#Full-duplex"
    , "Feature phone":"http://en.wikipedia.org/wiki/Feature_phone"
    , "File archiver":"http://en.wikipedia.org/wiki/File_archiver"
    , "File descriptor":"http://en.wikipedia.org/wiki/File_descriptor"
    , "File name":"http://en.wikipedia.org/wiki/Filename"
    , "Firmware":"http://en.wikipedia.org/wiki/Firmware"
    , "Flag":"http://en.wikipedia.org/wiki/Flag_%28computing%29"
    , "Flame war":"https://en.wikipedia.org/wiki/Flame_war#Flame_wars"
    , "FOUC":"http://en.wikipedia.org/wiki/Flash_of_unstyled_content"
    , "Front and back ends":"http://en.wikipedia.org/wiki/Front_and_back_ends"
    , "gettext":"http://en.wikipedia.org/wiki/Gettext"
    , "Git":"http://en.wikipedia.org/wiki/Git_%28software%29"
    , "GMS":"http://en.wikipedia.org/wiki/Globalization_Management_System"
    , "GPL":"http://en.wikipedia.org/wiki/Gpl"
    , "GUI":"http://en.wikipedia.org/wiki/Graphical_user_interface"
    , "HCI":"http://en.wikipedia.org/wiki/Human-computer_interaction"
    , "HDMI":"http://en.wikipedia.org/wiki/Hdmi"
    , "Header":"http://en.wikipedia.org/wiki/Header_%28computing%29"
    , "Heroku":"http://en.wikipedia.org/wiki/Heroku"
    , "HTTP header":"http://en.wikipedia.org/wiki/HTTP_header"
    , "HTTP pipelining":"http://en.wikipedia.org/wiki/HTTP_pipelining"
    , "HTTP request message" : "http://en.wikipedia.org/wiki/Http_request#Request_message"
    , "HTTP status code":"http://en.wikipedia.org/wiki/List_of_HTTP_status_codes"
    , "IDE":"http://en.wikipedia.org/wiki/Integrated_Development_Environment"
    , "Include_directive":"http://en.wikipedia.org/wiki/Include_directive"
    , "Information processor":"http://en.wikipedia.org/wiki/Information_processing_system"
    , "Information system":"http://en.wikipedia.org/wiki/Information_system"
    , "Input/output":"http://en.wikipedia.org/wiki/Input/output"
    , "Installer":"http://en.wikipedia.org/wiki/Installer_%28OS_X%29"
    , "Integrated circuit":"http://en.wikipedia.org/wiki/Integrated_circuits"
    , "Intel":"http://en.wikipedia.org/wiki/Intel"
    , "Interface":"http://en.wikipedia.org/wiki/Interface_%28computing%29"
    , "Internationalization and Localization":"https://en.wikipedia.org/wiki/Internationalization_and_localization"
    , "Internet hosting service":"http://en.wikipedia.org/wiki/Internet_hosting_service"
    , "Interpreter":"http://en.wikipedia.org/wiki/Interpreter_%28computing%29"
    , "Inter-process communication":"http://en.wikipedia.org/wiki/Inter-process_communication"
    , "Interrupt":"http://en.wikipedia.org/wiki/Interrupt"
    , "IPsec":"http://en.wikipedia.org/wiki/IPsec"
    , "JavaScript":"http://en.wikipedia.org/wiki/JavaScript"
    , "jQuery":"http://en.wikipedia.org/wiki/Jquery"
    , "JSON":"http://en.wikipedia.org/wiki/JSON"
    , "Kernel":"http://en.wikipedia.org/wiki/User_space"   
    , "Library":"http://en.wikipedia.org/wiki/Library_%28computing%29"
    , "Light-weight process":"http://en.wikipedia.org/wiki/Light-weight_process"
    , "Lint":"http://en.wikipedia.org/wiki/Lint_%28software%29"
    , "Linux distribution":"http://en.wikipedia.org/wiki/Linux_distribution"
    , "Locale":"https://en.wikipedia.org/wiki/Locale"
    , "Localization":"https://en.wikipedia.org/wiki/Localization"
    , "Look and feel":"http://en.wikipedia.org/wiki/Look_and_feel"
    , "MacPorts" : "http://en.wikipedia.org/wiki/MacPorts"
    , "MAMP":"http://en.wikipedia.org/wiki/MAMP"
    , "Mashup" : "http://en.wikipedia.org/wiki/Mashup_%28web_application_hybrid%29"
    , "Memory footprint":"http://en.wikipedia.org/wiki/Memory_footprint"
    , "Markup language":"http://en.wikipedia.org/wiki/Markup_language"
    , "Merge":"https://en.wikipedia.org/wiki/Merge_(revision_control)"
    , "Microcontroller":"http://en.wikipedia.org/wiki/Microcontrollers"
    , "Microprocessor":"http://en.wikipedia.org/wiki/Microprocessor"
    , "Middleware":"http://en.wikipedia.org/wiki/Middleware"
    , "Mobile phone":"http://en.wikipedia.org/wiki/Mobile_phone"
    , "Modular programming":"http://en.wikipedia.org/wiki/Module_%28programming%29"
    , "Mongo DB":"http://en.wikipedia.org/wiki/MongoDB"
    , "MooTools":"http://en.wikipedia.org/wiki/Mootools"
    , "Mozilla":"http://en.wikipedia.org/wiki/Mozilla"
    , "Mozilla Persona":"http://en.wikipedia.org/wiki/Mozilla_Persona"
    , "mv":"http://en.wikipedia.org/wiki/Mv"
    , "Nagios" : "http://en.wikipedia.org/wiki/Nagios"
    , "Netcat":"http://en.wikipedia.org/wiki/Netcat"
    , "Network interface":"http://en.wikipedia.org/wiki/Network_interface"
    , "Network service":"http://en.wikipedia.org/wiki/Network_service"
    , "Network socket":"http://en.wikipedia.org/wiki/Internet_socket"
    , "News aggregator":"http://en.wikipedia.org/wiki/News_aggregator"
    , "nginx":"http://en.wikipedia.org/wiki/Nginx"
    , "Node.js":"http://en.wikipedia.org/wiki/Node_js"
    , "npm":"http://en.wikipedia.org/wiki/Npm_%28software%29"
    , "Operating environment":"http://en.wikipedia.org/wiki/Operating_environment"
    , "Operating system":"http://en.wikipedia.org/wiki/Operating_system"
    , "Overhead":"http://en.wikipedia.org/wiki/Overhead_%28computing%29"
    , "Package":"http://en.wikipedia.org/wiki/Package_%28package_management_system%29"
    , "Package management system":"http://en.wikipedia.org/wiki/Package_management_system"
    , "Parsing":"http://en.wikipedia.org/wiki/Parse"
    , "Password" : "http://en.wikipedia.org/wiki/Password"
    , "Patch":"http://en.wikipedia.org/wiki/Patch_%28computing%29"
    , "PID":"http://en.wikipedia.org/wiki/Process_identifier"
    , "Platform as a service":"http://en.wikipedia.org/wiki/Platform_as_a_service"
    , "Plug-in":"http://en.wikipedia.org/wiki/Plug-in_%28computing%29"
    , "Portable object":"http://en.wikipedia.org/wiki/Portable_object_%28computing%29"
    , "POSIX":"http://en.wikipedia.org/wiki/POSIX"
    , "Presentation semantics":"http://en.wikipedia.org/wiki/Presentation_semantics"
    , "Processor core":"http://en.wikipedia.org/wiki/Processor_core"
    , "procfs" : "http://en.wikipedia.org/wiki/Procfs"
    , "Programming paradigm":"http://en.wikipedia.org/wiki/Programming_paradigm"
    , "Property list":"http://en.wikipedia.org/wiki/Property_list"
    , "Proxy server":"http://en.wikipedia.org/wiki/Proxy_server"
    , "Query language":"http://en.wikipedia.org/wiki/Database_language"
    , "Reactor pattern":"http://en.wikipedia.org/wiki/Reactor_pattern"
    , "Rebasing":"https://en.wikipedia.org/wiki/Rebasing"
    , "Redis":"http://en.wikipedia.org/wiki/Redis"
    , "Rendering engine":"http://en.wikipedia.org/wiki/Rendering_engine"
    , "Request-response":"http://en.wikipedia.org/wiki/Request-response"
    , "REST":"http://en.wikipedia.org/wiki/Representational_state_transfer"
    , "RISC":"http://en.wikipedia.org/wiki/Reduced_instruction_set_computing"
    , "rm":"http://en.wikipedia.org/wiki/Rm_%28Unix%29"
    , "RPM package manager":"http://en.wikipedia.org/wiki/RPM_Package_Manager"
    , "RSA: what is it?":"http://en.wikipedia.org/wiki/RSA_%28algorithm%29"
    , "RSS":"http://en.wikipedia.org/wiki/RSS"
    , "Ruby":"http://en.wikipedia.org/wiki/Ruby_%28programming_language%29"
    , "Ruby on Rails":"http://en.wikipedia.org/wiki/Ruby_on_Rails"
    , "Run-time (system)":"http://en.wikipedia.org/wiki/Run-time_system"
    , "SaaS":"http://en.wikipedia.org/wiki/Software_as_a_service"
    , "Screen cast":"http://en.wikipedia.org/wiki/Screencast"
    , "Self-hosting":"http://en.wikipedia.org/wiki/Self-hosting"
    , "Separation of concerns":"http://en.wikipedia.org/wiki/Separation_of_concerns"
    , "SERP":"http://en.wikipedia.org/wiki/Search_engine_results_pages"
    , "Server":"http://en.wikipedia.org/wiki/Server_%28computing%29"
    , "Server-side":"http://en.wikipedia.org/wiki/Server-side"
    , "SSI":"http://en.wikipedia.org/wiki/Server_Side_Includes"
    , "Service Models":"http://en.wikipedia.org/wiki/Cloud_computing#Service_models"
    , "SGML":"http://en.wikipedia.org/wiki/SGML"
    , "SHA-1":"http://en.wikipedia.org/wiki/SHA-1"
    , "Shared library":"https://en.wikipedia.org/wiki/Shared_library#Shared_libraries"
    , "Shell":"http://en.wikipedia.org/wiki/System_shell"
    , "Shell":"http://en.wikipedia.org/wiki/Shell_%28computing%29"
    , "Slug":"http://en.wikipedia.org/wiki/Slug_%28web_publishing%29#Slug"
    , "Smartphone":"http://en.wikipedia.org/wiki/Smartphone"
    , "Socket.IO":"http://en.wikipedia.org/wiki/Socket.io"
    , "Software":"http://en.wikipedia.org/wiki/Computer_software"
    , "Software as a service":"http://en.wikipedia.org/wiki/Software_as_a_service"
    , "Software agent":"http://en.wikipedia.org/wiki/Software_agent"
    , "Software architecture":"http://en.wikipedia.org/wiki/Software_architecture"
    , "Software component":"http://en.wikipedia.org/wiki/Software_component#Software_component"
    , "Software engine":"http://en.wikipedia.org/wiki/Software_engine"
    , "Software Framework":"http://en.wikipedia.org/wiki/Software_framework"
    , "Software package":"http://en.wikipedia.org/wiki/Software_package_%28installation%29"
    , "Software suite":"http://en.wikipedia.org/wiki/Software_suite"
    , "Software system":"http://en.wikipedia.org/wiki/Software_system"
    , "Solution stack":"http://en.wikipedia.org/wiki/Solution_stack"
    , "Source code":"http://en.wikipedia.org/wiki/Source_code"
    , "SSO":"http://en.wikipedia.org/wiki/Single_sign-on"
    , "Standard streams":"http://en.wikipedia.org/wiki/Standard_streams"
    , "State":"http://en.wikipedia.org/wiki/State_%28computer_science%29"
    , "Subdomain 2" : "https://en.wikipedia.org/wiki/Subdomain"
    , "Style sheet language":"http://en.wikipedia.org/wiki/Style_sheet_language"
    , "Stylus":"http://en.wikipedia.org/wiki/Stylus_%28stylesheet_language%29"
    , "su":"http://en.wikipedia.org/wiki/Su_%28Unix%29"
    , "System(s) software":"http://en.wikipedia.org/wiki/System_software"
    , "tar":"http://en.wikipedia.org/wiki/Tar_%28file_format%29"
    , "TCP":"http://en.wikipedia.org/wiki/Transmission_Control_Protocol"
    , "Technical documentation":"http://en.wikipedia.org/wiki/Technical_documentation"
    , "Telnet":"http://en.wikipedia.org/wiki/Telnet"
    , "Template Engine":"https://en.wikipedia.org/wiki/Template_engine_%28web%29"
    , "Text terminals":"http://en.wikipedia.org/wiki/Text_terminal#Text_terminals"
    , "Thread (of execution)":"http://en.wikipedia.org/wiki/Thread_%28computer_science%29"
    , "Thread pool":"http://en.wikipedia.org/wiki/Thread_pool"
    , "tl;dr":"http://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read"
    , "Toolchain":"http://en.wikipedia.org/wiki/Toolchain"
    , "Touchpad":"http://en.wikipedia.org/wiki/Touchpad"
    , "Transifex":"http://en.wikipedia.org/wiki/Transifex"
    , "UI":"http://en.wikipedia.org/wiki/User_interface"
    , "Uname":"http://en.wikipedia.org/wiki/Uname"
    , "URI":"http://en.wikipedia.org/wiki/Uniform_resource_identifier"
    , "URI Scheme": "http://en.wikipedia.org/wiki/URI_scheme"
    , "URL" : "http://en.wikipedia.org/wiki/Url"
    , "User" : "http://en.wikipedia.org/wiki/User_%28computing%29"
    , "User agent":"http://en.wikipedia.org/wiki/User_agent"
    , "User space":"http://en.wikipedia.org/wiki/User_space"
    , "UUID" : "http://en.wikipedia.org/wiki/Universally_unique_identifier"
    , "V8":"http://en.wikipedia.org/wiki/V8_%28JavaScript_engine%29"
    , "VGA":"http://en.wikipedia.org/wiki/Vga"
    , "VM":"http://en.wikipedia.org/wiki/Virtual_machine"
    , "VPS":"http://en.wikipedia.org/wiki/Virtual_private_server"
    , "Web API" : "http://en.wikipedia.org/wiki/Web_API"
    , "Web application":"http://en.wikipedia.org/wiki/Web_application"
    , "Web application framework":"http://en.wikipedia.org/wiki/Web_application_framework"
    , "Web browser":"http://en.wikipedia.org/wiki/Web_browser"
    , "Web browser engine":"http://en.wikipedia.org/wiki/Web_browser_engine"
    , "Web content" : "http://en.wikipedia.org/wiki/Web_content"
    , "Web feed":"http://en.wikipedia.org/wiki/Web_feed"
    , "Web hook":"http://en.wikipedia.org/wiki/Webhook"
    , "Web resource" : "http://en.wikipedia.org/wiki/Web_resource"
    , "Web search engine":"http://en.wikipedia.org/wiki/Search_engine"
    , "Web server":"http://en.wikipedia.org/wiki/Web_server"
    , "Web service":"http://en.wikipedia.org/wiki/Web_service"
    , "Website" : "http://en.wikipedia.org/wiki/Web_site"
    , "WebSocket":"http://en.wikipedia.org/wiki/WebSocket"
    , "Web syndication":"http://en.wikipedia.org/wiki/Web_syndication"
    , "Wrapper library":"http://en.wikipedia.org/wiki/Wrapper_library"
    , "Xcode":"http://en.wikipedia.org/wiki/Xcode"
    , "XHR": "http://en.wikipedia.org/wiki/XMLHttpRequest"
    , "XML":"http://en.wikipedia.org/wiki/Xml"
  };


  return printObj(ittermsObj);
};

//----------------------------------------------------------------------------

function java(){
  document.getElementById("display_pane").innerHTML=javaFunc();
}; // end java

var javaFunc = function(){

  // VERSION 1: array of links
  
  // js object
  var javaObj = {
   "append()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#append(boolean)"
   , "zzz":"aaa"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#length()"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#length()"
   , "stringBuffer":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html"
   , "substring()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#substring(int)"
  }; // end js object


  //var obj = javaObj;

   return printObj(javaObj);
  


}; // end javaFunc

//==================================================
function jobsearch() {
  document.getElementById("display_pane").innerHTML = jobsearchFunc();
}
;

var jobsearchFunc = function() {
  var jobsearchObj = {
    "10 Qualities of Exceptional Interviewers": "http://www.linkedin.com/today/post/article/20130618124448-20017018-10-qualities-of-exceptional-interviewers?goback=.gde_50512_member_252151575"
    , "In a brothel line-up?": "http://www.askamanager.org/2012/05/im-afraid-im-about-to-be-offered-a-job-i-wont-be-good-at.html"


  };

  return printObj(jobsearchObj);

};

//----------------------------------------------------------------------------

function js() {
  document.getElementById("display_pane").innerHTML = jsFunc();
}
;

var jsFunc = function() {
  var jsObj = {
    "Case insensitive sort": "http://stackoverflow.com/questions/14308786/custom-case-insensitive-sort-function-that-retains-original-casing"
    , "Date": "http://www.w3schools.com/js/js_obj_date.asp"
    , "display a clock": "http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock"
    , "Essential trainiung": "http://www.lynda.com/JavaScript-tutorials/Essential-Training-2011/81266-2.html"
    , "getDay()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_weekday"
    , "getFullYear()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getfullyear"
    , "getTime()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime"
    , "Google Hosted Libraries": "https://developers.google.com/speed/libraries/devguide"
    , "innerHTML=": "http://www.w3schools.com/jsref/prop_html_innerhtml.asp"
    , "jQuery": "http://learn.jquery.com/"
    , "JavaScript": "http://www.w3schools.com/js/default.asp"
    , "JS Fiddle": "http://jsfiddle.net/"
    , "JS Fiddle Tutorial": "http://doc.jsfiddle.net/tutorial.html"
    , "JSF Bael" : "http://jsfiddle.net/igoryen/Nr9PB/"
    , "JSF Batuan" : "http://jsfiddle.net/igoryen/H3FSf/"
    , "JSF Beach Plum" : "http://jsfiddle.net/igoryen/JJDnF/2/"
    , "JSF Bearberry": "http://jsfiddle.net/igoryen/J83H8/4/"
    , "JS hint": "http://www.jshint.com/"
    , "JS the Good Parts": "http://eleventyone.done.hu/OReilly.JavaScript.The.Good.Parts.May.2008.pdf"
    , "Nunjucks": "http://nunjucks.jlongster.com/"
    , "Nunjucks (@ npmjs)": "https://npmjs.org/package/nunjucks"
    , "onclick=": "http://www.w3schools.com/jsref/event_onclick.asp"
    , "setFullYear()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_setfullyear2"
    , "setInterval()": "http://www.w3schools.com/js/js_timing.asp"
    , "setTimeOut()": "http://www.w3schools.com/js/js_timing.asp"
    , "toUTCString()": "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_toutcstring"
    , "Hello World! 1": "http://jsfiddle.net/igoryen/3pEyA/"
    , "Hello World! 2":"http://jsfiddle.net/igoryen/3pEyA/1/"
    , "Hello World! 3":"http://jsfiddle.net/igoryen/3pEyA/2/"
    , "Hello World! 4":"http://jsfiddle.net/praveen_prasad/XNJxT/14/"
    , "List": "http://jsfiddle.net/rniemeyer/bxfXd/"
    , "Popcorn": "http://jsfiddle.net/rwaldron/xhXE6/"

  };

  return printObj(jsObj);

};

//----------------------------------------------------------------------------

function lingua() {
  document.getElementById("display_pane").innerHTML = linguaFunc();
}
;
var linguaFunc = function() {
  var linguaObj = {
    "Aloisius Latine": "https://www.youtube.com/watch?v=vZ3gxKCgtEU"    
    , "Jamaikanize": "http://www.jamaicanize.com/"
    , "Kanji Recognizer": "http://kanji.sljfaq.org/"
    , "Latin Grammar (Orbilat)": "http://www.orbilat.com/Languages/Latin/Grammar/index.html"
    , "Latin Links": "http://www.frcoulter.com/latin/links.html"
    , "Latinum": "https://sites.google.com/site/janualinguae/latin"
    , "Merriam-Webster 1": "http://www.merriam-webster.com/"
    , "Merriam-Webster 2": "http://www.learnersdictionary.com/"
    , "Multitran": "http://www.multitran.ru/c/m.exe?a=1"
    , "Nuntii Latini": "http://yle.fi/radio1/tiede/nuntii_latini/"
    , "Omniglot": "http://www.omniglot.com/writing/index.htm"
    , "Orbilat": "http://www.orbilat.com/"
    , "Romanian closest to Classical Latin": "http://www.antimoon.com/forum/t2129-0.htm"
    , "Recens Latinitas ": "file:///D:/Language/Latina/html/latinitas_recens_latine.html"
    , "Schola": "http://schola.ning.com/"
    , "Terentius et Milena ": "https://www.youtube.com/watch?v=mi_6LIPEP7M"
    , "Translate.ru": "http://www.translate.ru/"
    , "Translit.ru ": "http://www.translit.ru/"

  };

  return printObj(linguaObj);

};
//----------------------------------------------------------------------------


function l10n() {
  document.getElementById("display_pane").innerHTML = l10nFunc();

}
;
var l10nFunc = function() {
  var l10nObj = {
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

  };

  return printObj(l10nObj);

};
//----------------------------------------------------------------------------
function mozilla() {
  document.getElementById("display_pane").innerHTML = mozillaFunc();

}
;
var mozillaFunc = function() {
  var mozillaObj = {
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



  };
  return printObj(mozillaObj);
};
// MOZ ----------------------------------------------------------------------------

function mozBugs() {
  document.getElementById("display_pane").innerHTML = bugsFunc();
}

var bugsFunc = function() {

  var bugsObj = {
      "870429 - locales": "https://bugzilla.mozilla.org/show_bug.cgi?id=870429"
    , "869643 - MONGO": "https://bugzilla.mozilla.org/show_bug.cgi?id=869643"
    , "873064 - prune": "https://bugzilla.mozilla.org/show_bug.cgi?id=873064"
    , "873098 - old code": "https://bugzilla.mozilla.org/show_bug.cgi?id=873098"
    , "877269 - MakeAPI unit tests": "https://bugzilla.mozilla.org/show_bug.cgi?id=877269"
    , "877269 - github" : "https://github.com/humphd/MakeAPI/tree/bug877269"
    , "877305 - comma": "https://bugzilla.mozilla.org/show_bug.cgi?id=877305"
    , "881734 - audit": "https://bugzilla.mozilla.org/show_bug.cgi?id=881734"
    , "870995 - Make! - '!'": "https://bugzilla.mozilla.org/show_bug.cgi?id=870995"
    , "883426 - update module": "https://bugzilla.mozilla.org/show_bug.cgi?id=883426"
    , "885193 - search field": "https://bugzilla.mozilla.org/show_bug.cgi?id=885193"
    , "888565 - login.webm... l10n": "https://bugzilla.mozilla.org/show_bug.cgi?id=888565"
    , "889322 - wm.org 4 html files (ref)": "https://bugzilla.mozilla.org/show_bug.cgi?id=889322"
    , "891491 - i18n-abide on wm.org (ref)": "https://bugzilla.mozilla.org/show_bug.cgi?id=891491"
    , "891914 - Localize wm.org/event-guides": "https://bugzilla.mozilla.org/show_bug.cgi?id=891914"
    , "892631 - Localize privacy and /terms": "https://bugzilla.mozilla.org/show_bug.cgi?id=892631"
    , "896623 - take string off the static" : "https://bugzilla.mozilla.org/show_bug.cgi?id=896623"
    , "899703 - Duplicate paragraph": "https://bugzilla.mozilla.org/show_bug.cgi?id=899703"
    , "900668 - Reorder cond. checks": "https://bugzilla.mozilla.org/show_bug.cgi?id=900668"
    , "902115 - Remove 'Layer #'": "https://bugzilla.mozilla.org/show_bug.cgi?id=902115"
    , "902458 - localize wm-events": "https://bugzilla.mozilla.org/show_bug.cgi?id=902458"
    , "Bugzilla": "https://bugzilla.mozilla.org/"
    , "Bugzilla: work with bugs": "http://sedgestuff.wordpress.com/2013/05/09/howto-working-with-open-bugs-on-bugzilla/"
    , "Dashboard - Bugzilla": "https://bugzilla.mozilla.org/page.cgi?id=mydashboard.html"
    , "Scrumbu.gs" : "http://scrumbu.gs/"
    , "Scrumbu.gs Webmaker" : "http://scrumbu.gs/t/webmaker/"
    

  };
  return printObj(bugsObj);
  
};


//----------------------------------------------------------------------------

function mus() {
  document.getElementById("display_pane").innerHTML = mus2();
}
;
var mus2 = function() {
  var musicObj = {
    "A Beautiful Exchange": "https://www.youtube.com/watch?v=r-bUZj1bkoE"
    , "A Day without Rain": "https://www.youtube.com/watch?v=JgErQp7b8KI"
    , "A Wealthy Place": "http://www.youtube.com/watch?v=2O_eF1eZk0g"
    , "Avenit, Iarna": "https://www.youtube.com/watch?v=ikzQuJW2x5Q&list=RD02m7r-210gW-A"
    , "Aliens": "http://www.youtube.com/watch?v=OQXWJCQVGBc"
    , "All that she wants": "http://www.youtube.com/watch?v=8OB28fTKSds"
    , "Always": "https://www.youtube.com/watch?v=9BMwcO6_hyA"
    , "Amarantine": "https://www.youtube.com/watch?v=dsFpNs-ch9Y"
    , "Afro Celt": "http://www.youtube.com/watch?v=ClAkyn8EAS4&list=PLSC1WNAGYIGWHDMRBNMDBNETHY6ABYO7L"
    , "Afro Celt Playlist": "http://www.youtube.com/watch?v=XZfMix6olic&playnext=1&list=PLB2AB51B20782729C&feature=results_main"
    , "Alice Theme (Movie)": "https://www.youtube.com/watch?v=LW7cikQuc1s"
    , "And Winter Came": "https://www.youtube.com/watch?v=oF5dVw2sAMY"
    , "Another Night": "http://www.youtube.com/watch?v=QNbRMG-4wAI"
    , "Anthill, The": "http://www.youtube.com/watch?v=MtalpBUyl5I"
    , "Astazi Sa Nascut Hristos": "https://www.youtube.com/watch?v=Q93f6BLUx-0"
    , "Bad": "http://www.youtube.com/watch?v=dsUXAEzaC3Q"
    , "Be Thou My Vision": "http://www.youtube.com/watch?v=Wk2LWZ9PHPY&NR=1&feature=fvwp"
    , "Beautiful Light Music": "http://www.youtube.com/watch?v=FOIjvHjK0Rw"
    , "Better is One Day": "https://www.youtube.com/watch?v=rnWLMsPhOdQ"
    , "Bitter Sweet Symphony": "https://www.youtube.com/watch?v=1lyu1KKwC74"
    , "Bless the Lord": "https://www.youtube.com/watch?NR=1&v=RWJLy3-iRQo&feature=endscreen"
    , "Blessed the Lord - live": "http://www.youtube.com/watch?v=DXDGE_lRI0E"
    , "Blood Group": "http://www.youtube.com/watch?v=6i7zxpbOcaI"
    , "Blurred Lines": "http://www.youtube.com/watch?v=Kv4yLM-ysqU"
    , "Break Every Chain": "https://www.youtube.com/watch?v=kNAV98bAqng"
    , "Breath": "http://www.youtube.com/watch?v=sBCC1kDVVWk"
    , "Brook in the Woods": "http://www.youtube.com/watch?v=b2njHW9ydWs"
    , "Brown noise": "https://www.youtube.com/watch?v=iMrjYpU3YD4"
    , "Bullets are flying": "http://www.youtube.com/watch?v=ttZKDtTW1aI"
    , "Careless Whisper": "https://www.youtube.com/watch?v=_bQTmS_kzIo"
    , "Castle of Rain, A": "http://www.youtube.com/watch?v=tn_ZB7Zt8Zg"
    , "Change": "http://www.youtube.com/watch?v=eg7BFXss1hE"
    , "Charles & Raven": "http://www.youtube.com/watch?v=07r60T0drUk"
    , "Christian classical music": "http://www.youtube.com/watch?v=qAJNg5iuEGU"
    , "Crickets chirping at night": "http://www.youtube.com/watch?v=jzN3yJXlWrg"
    , "Cricket Symphony": "http://www.youtube.com/watch?v=aoiV7c46C1A"
    , "Crockett`s Theme": "https://www.youtube.com/watch?v=_UmOY6ek_Y4"
    , "Crying in the Rain": "https://www.youtube.com/watch?v=h-WPexVEujg"
    , "Derezzed": "http://www.youtube.com/watch?v=M4dUiBfMQVU"
    , "Domn, Domn, Sa-naltam": "https://www.youtube.com/watch?v=g82MacFQ4D8"
    , "Don`t dream it`s over": "http://www.youtube.com/watch?v=3bdOefF_tyU"
    , "Down to Earth": "http://www.youtube.com/watch?v=PuR8uq9J7gw"
    , "Dragula": "http://www.youtube.com/watch?v=fwgNscjpHn4"
    , "Drifting in a calm bay": "http://www.youtube.com/watch?v=hIzLW8FXrGA"
    , "Drums: Buddy Rich" : "http://www.youtube.com/watch?v=9esWG6A6g-k"
    , "Drums: Dave Weckl and 2" : "http://www.youtube.com/watch?v=UJsybbSHfx4"
    , "Drums: Phil Collins" : "http://www.youtube.com/watch?v=wdebGzgS3Rg"
    , "Earth": "https://www.youtube.com/watch?v=x83SXBc1sV0"
    , "Earth Angel (Back to the Future)": "https://www.youtube.com/watch?v=PjjIuwfpQhk"
    , "Earth Song": "https://www.youtube.com/watch?v=XAi3VTSdTxU"
    , "Englishman in NY": "https://www.youtube.com/watch?v=d27gTrPPAyk"
    , "Enya (playlist)": "http://www.youtube.com/watch?v=MAlqvTc9jiQ&list=PL76C801BFC5C95249"
    , "Enya, Singles Collection": "https://www.youtube.com/watch?v=pKd5H99bNOQ"
    , "Enya, the Best of": "https://www.youtube.com/watch?v=wOtQ2vMxOl0"
    , "Enya, the Very Best of": "https://www.youtube.com/watch?v=img8hbAiRIk"
    , "Er. Lounge": "http://www.youtube.com/watch?v=SP0nLHHzDPY"
    , "Er. Night Mix": "https://www.youtube.com/watch?v=wVJn0P0y-D4"
    , "Eternal Flame": "http://www.youtube.com/watch?v=DPxVIx06_CQ"
    , "Everything`s gonna be all right in Christ": "https://www.youtube.com/watch?v=uYXyo4kCffg"
    , "Extreme Ways": "https://www.youtube.com/watch?v=Au-v2RS0mJQ"
    , "Faith": "http://www.youtube.com/watch?v=phi9ZRjrTto"
    , "Fall On Me": "https://www.youtube.com/watch?v=xzq2AMQxxbk"
    , "Fat": "http://www.youtube.com/watch?v=t2mU6USTBRE"
    , "Fields of Gold": "https://www.youtube.com/watch?v=KLVq0IAzh1A"
    , "Forest Video": "https://www.youtube.com/watch?v=GHNDr69tNCE"
    , "Forever": "http://www.youtube.com/watch?v=5sMKX22BHeE"
    , "Forever Young 1": "http://www.youtube.com/watch?v=t1TcDHrkQYg"
    , "Forever Young 2": "http://www.youtube.com/watch?v=cLYm43lIKPk"
    , "Get Lucky": "http://www.youtube.com/watch?v=5NV6Rdv1a3I"
    , "Ghita": "https://www.youtube.com/watch?v=OY1vv7hQQCg"
    , "Ghita, ru": "https://www.youtube.com/watch?v=ah91dyjIgEA"
    , "Girl of 16": "https://www.youtube.com/watch?v=s9lQodyP_Bo"
    , "Go West": "http://www.youtube.com/watch?v=LNBjMRvOB5M"
    , "God will Come": "https://www.youtube.com/watch?v=qYS4BP-l37k"
    , "Good Night": "http://www.youtube.com/watch?v=hce8z2h0CoI"
    , "He picked me up": "http://www.youtube.com/watch?v=_oitOA-boqU#t=01m10s"
    , "Hector`s Death": "https://www.youtube.com/watch?v=S-l2JlM9WPU"
    , "Hillsong": "https://www.youtube.com/watch?v=eOY0mjjmx8Y&list=AL94UKMTqg-9Dk4C-hxfBZvi0qby76rv8P"
    , "Home is behind the world ahead": "http://www.youtube.com/watch?v=WskRAEggqkQ"
    , "Human": "http://www.youtube.com/watch?v=RIZdjT1472Y"
    , "I am Free": "https://www.youtube.com/watch?v=_MbcYyOsF5"
    , "I certainly believe you": "http://www.youtube.com/watch?v=eBzeG93LudE"
    , "I do it for you": "https://www.youtube.com/watch?v=ZGoWtY_h4xo"
    , "I drove all night": "http://www.youtube.com/watch?v=kvz_gW5C2cY"
    , "I know Love": "https://www.youtube.com/watch?v=OtkWEv533yU"
    , "I Surrender": "https://www.youtube.com/watch?v=HcnfT4arZtI"
    , "I will stay": "https://www.youtube.com/watch?v=sUSY1xJ3nzU"
    , "I Wish My Baby Was Born ": "http://www.youtube.com/watch?v=BYZ8tCKErso"
    , "I`m feeling fine": "http://www.youtube.com/watch?v=gETOClSe9DQ"
    , "I`m not moved by what I see": "http://www.youtube.com/watch?v=NomZHolreBk#t=1h00m35s"
    , "Ingeri de lumina": "https://www.youtube.com/watch?v=a7Q2Ec0bebA"
    , "Ingerii Şoptesc": "https://www.youtube.com/watch?v=1jPAZuaUMEw&list=RD02m7r-210gW-A"
    , "Insomnia cure": "http://www.youtube.com/watch?v=y0Zftj8IzCw"
    , "Is This Love": "https://www.youtube.com/watch?v=ujnH4yNqL8E"
    , "MyNeighbor Totoro": "https://www.youtube.com/watch?v=n611emATxSU&list=PLD97BD8BE7A5504C5"
    , "Jesus is ALWAYS with you": "http://www.godtube.com/watch/?v=0FBFCFNU&utm_source=GodTube%20Must-See%20-%20Mobile&utm_medium=email&utm_campaign=03/02/2013"
    , "Joey the Swampthing": "http://www.youtube.com/watch?v=S4aqM_wu6Ns"
    , "Joy of the Lord": "https://www.youtube.com/watch?v=Da5EdAsyEXM"
    , "Kiss me": "http://www.youtube.com/watch?v=8N-qO3sPMjc"
    , "Komarovo": "https://www.youtube.com/watch?v=k9-avqS0U4A"
    , "La Isla Bonita": "https://www.youtube.com/watch?v=7YzW1nMB9fk"
    , "Last Hero, the ": "https://www.youtube.com/watch?v=BnDY4jC7JZM"
    , "Learning to Fly": "https://www.youtube.com/watch?v=DrGuVa-4BVE"
    , "Legend, The": "http://www.youtube.com/watch?v=mN5d5KWJp0Y&feature=endscreen&NR=1"
    , "Life": "https://www.youtube.com/watch?v=rzI3AdpA9e4"
    , "Live to tell": "https://www.youtube.com/watch?v=IzAO9A9GjgI"
    , "Look after yourself ": "http://www.youtube.com/watch?v=8ki69Vcb_-E"
    , "Lose your Love": "http://www.youtube.com/watch?v=N81UChK78WY"
    , "Love songs, non stop": "http://www.youtube.com/watch?v=5eT0ZbunLGY"
    , "Lullaby": "http://www.youtube.com/watch?v=0_W7fMSBeJg"
    , "Magneto Theme": "https://www.youtube.com/watch?v=frqYK1EZ3O0"
    , "Manic Monday": "http://www.youtube.com/watch?v=lAZgLcK5LzI"
    , "Maria si Iosif Colinda": "https://www.youtube.com/watch?v=Pnpl8EkPG6Y"
    , "Massive Attack": "https://www.youtube.com/watch?v=hbe3CQamF8k"
    , "May It Be": "https://www.youtube.com/watch?v=_upDME6MwPY"
    , "Meat Beat Manifesto": "https://www.youtube.com/watch?v=frqYK1EZ3O0"
    , "Mein Herz brennt (instr.)": "https://www.youtube.com/watch?v=mKQ0tncZxuw"
    , "Memory of the Trees, The": "https://www.youtube.com/watch?v=UEBIc7NHyQk"
    , "Mindfields": "http://www.youtube.com/watch?v=jv7-EmmDWds"
    , "Minstrel Boy": "https://www.youtube.com/watch?v=ZrY6Uf4Hyxg"
    , "Mio Min Mio": "https://www.youtube.com/watch?v=5pgVkE_kCZ8"
    , "Mom we are all severely ill": "http://www.youtube.com/watch?v=pLE2ngmVqZY"
    , "Mom bought me a horsey": "http://www.youtube.com/watch?v=ds635sBc59I"
    , "Money Shmoney": "http://www.youtube.com/watch?v=NWTEhkG73yU"
    , "Movement and Location": "https://www.youtube.com/watch?v=SxaPbOEm070"
    , "Music 4vi": "http://www.youtube.com/watch?v=MhWv1bn6SM4&playnext=1&list=PLC4BE809C8B229989&feature=results_main"
    , "My Crush is On the 5th Floor": "http://www.youtube.com/watch?v=1q95rkKtq6I"
    , "My Jesus I love Thee": "http://www.youtube.com/watch?v=EYfBZnMve_E"
    , "Nastenka`s song": "http://www.youtube.com/watch?v=gcsBzZ3hWUM"
    , "Nature Sounds 1": "http://www.youtube.com/watch?v=T-ExXFoGeOQ"
    , "Nature Sounds 3 Rain Forest": "http://www.youtube.com/watch?v=1XEsIFObhrY"
    , "Nature Sounds 4": "http://www.youtube.com/watch?v=-K6thJUU7hc"
    , "Nature Sounds 12": "http://www.youtube.com/watch?v=eTglERP772s"
    , "Nature Sounds 13": "http://www.youtube.com/watch?v=CtjWbDjmpag"
    , "Nature Sounds 15": "http://www.youtube.com/watch?v=pzJsGK7kig4"
    , "Nature Sounds 16": "http://www.youtube.com/watch?v=b2njHW9ydWs"
    , "Nature Sounds Jungle": "http://www.youtube.com/watch?v=MOBzSxFK8E0"
    , "Nature Sounds Stream": "http://www.youtube.com/watch?v=0GR0FO5qdeM"
    , "Nature Sound": "http://www.youtube.com/watch?v=1ASJxKpztWg&playnext=1&list=PLB5B1BE68A533E287&feature=results_main"
    , "Nature Sounds Stream Sound": "http://www.youtube.com/watch?v=vb1lWFonCeU&playnext=1&list=PLDED02197B8A7F8B3&feature=results_main"
    , "Never Once": "http://www.youtube.com/watch?v=n1bXG4WIesA"
    , "New Song": "http://www.youtube.com/watch?v=iWNvM2Ebcjc"
    , "Night Crickets": "http://www.youtube.com/watch?v=TLYmOwPxHTA"
    , "Night Sounds": "http://www.youtube.com/watch?v=glMgc8S-fVI"
    , "Nothing's gonna change my love for you" : "http://www.youtube.com/watch?v=MLxTEV5vpyg"
    , "Paint the Sky with Stars": "https://www.youtube.com/watch?v=bvHyT8kmirg"
    , "Prometheus OST": "http://www.youtube.com/watch?v=LhlHqANcKjU&list=PLC07602E283C29704"
    , "Rain Piano Nigh time": "http://www.youtube.com/watch?v=hBcwaWFlGkI"
    , "Rammstein": "http://www.youtube.com/watch?v=lw7USlGwn2w&list=PLRW6BNC-pDizxCk0OeSgZHYOIOfp-68NC&index=1&feature=plpp_video"
    , "Red and Yellow Days": "http://www.youtube.com/watch?v=N_KQ9oDp0-c"
    , "Red hands - Walk Off the Earth" : "http://www.youtube.com/watch?v=RYRi4dtBxzg"
    , "Reggae Praise": "https://www.youtube.com/watch?v=v5tWLQfFhmA&list=PL99DC3501551CA6FC"
    , "Remember Me": "https://www.youtube.com/watch?v=3yy6SIzq8Mc"
    , "Right Here Waiting": "https://www.youtube.com/watch?v=S_E2EHVxNAE"
    , "River of Dreams, The": "http://www.youtube.com/watch?v=hSq4B_zHqPM"
    , "Room for a step forward": "http://www.youtube.com/watch?NR=1&v=6JJw-ntEG_0&feature=endscreen"
    , "Runaway Train": "http://www.youtube.com/watch?v=NRtvqT_wMeY"
    , "Sea Shore Sounds ": "http://www.youtube.com/watch?v=1ASJxKpztWg"
    , "Seara de Craciun Frumos": "https://www.youtube.com/watch?v=SUO3go2NMOU"
    , "Secrets": "http://www.youtube.com/watch?v=rHsx3tFZDOk"
    , "Seven Seconds ": "https://www.youtube.com/watch?v=nJFjjgpXkN0"
    , "Shape of my heart 1": "http://www.youtube.com/watch?v=KX4jAplZb0Y"
    , "Shape of my heart 2":"http://www.youtube.com/watch?v=locIxsfpgp4"
    , "Shepherd Moons": "https://www.youtube.com/watch?v=PRPOv3RXse8"
    , "Sleep Music ": "http://www.youtube.com/watch?v=FecEPrIOPJM"
    , "Something More": "https://www.youtube.com/watch?v=GrV_ZvwZRvw"
    , "Somewhere Over the Rainbow": "http://www.youtube.com/watch?NR=1&feature=endscreen&v=6ZqPLxCDLs4"
    , "Song of the Lonely Mount`n ": "http://www.youtube.com/watch?v=iIy5zvSpF1E"
    , "Sorrow ": "http://www.youtube.com/watch?v=UKQW3SSqAxw"
    , "Spybreak! ": "http://www.youtube.com/watch?v=iCBL33NKvPA"
    , "Stand, The ": "http://www.youtube.com/watch?v=kV5iZBTNYrk"
    , "Star, The ": "http://www.youtube.com/watch?v=kIvISJIgTms"
    , "Star named Sun, The ": "https://www.youtube.com/watch?v=BuQkQEcsm5Y"
    , "Stars will grow dim 1": "http://www.youtube.com/watch?v=yeRRpr2JA60"
    , "Stars will grow dim 2":"http://www.youtube.com/watch?v=4Ip_XXAgv18"
    , "Summer will be over ": "http://www.youtube.com/watch?v=Xk7v8Kp_6n0"
    , "Take On Me": "https://www.youtube.com/watch?v=djV11Xbc914"
    , "Tell Him": "http://www.youtube.com/watch?v=wB_vjpRhLxM"
    , "The One Who Saves": "https://www.youtube.com/watch?v=we4p6GzcWIM"
    , "The Power of Goodbye": "https://www.youtube.com/watch?v=Eq01a0KEJ9U"
    , "They don`t really care about us": "https://www.youtube.com/watch?v=QNJL6nfu__Q"
    , "They don`t really care about us, prison v.": "https://www.youtube.com/watch?v=ixBryyQSrD8"
    , "Thinking about you": "https://www.youtube.com/watch?v=ixBryyQSrD8"
    , "This is my desire": "https://www.youtube.com/watch?v=-XKxqqhOgVM"
    , "Time after Time": "https://www.youtube.com/watch?v=VdQY7BusJNU"
    , "T.L.C. - Gemini": "http://www.youtube.com/watch?v=KcI9-VMMH64"
    , "Tom`s Diner": "https://www.youtube.com/watch?v=FLP6QluMlrg"
    , "Totoro OST" : "http://www.youtube.com/watch?v=n611emATxSU&list=PLD97BD8BE7A5504C5"
    , "Tron OST": "http://www.youtube.com/watch?v=2OmDnzlXeqw&playnext=1&list=PL2DE765CC5D6EBBD8&feature=results_main"
    , "TV Guide": "http://www.youtube.com/watch?v=w0ibz9KkHAI"
    , "Visitor from the Future": "http://www.youtube.com/watch?v=sAdug2Kqfdg"
    , "Voyage voyage ": "http://www.youtube.com/watch?v=6PDmZnG8KsM"
    , "Walk off the Earth - Red Hands": "http://vimeo.com/50712590"
    , "War ": "http://www.youtube.com/watch?v=CUPH5il-Cf0"
    , "Watermark": "https://www.youtube.com/watch?v=LQ00OPea4GI"
    , "We didn't start the fire": "http://www.youtube.com/watch?v=eFTLKWw542g"
    , "We`ll be together": "http://www.youtube.com/watch?v=bCCzPC_TTvI"
    , "What a wonderful world (IZ)": "http://www.youtube.com/watch?v=ggU2il6EaEU"
    , "What is love ": "https://www.youtube.com/watch?v=VVmbhYKDKfU"
    , "White Heart, playlist": "https://www.youtube.com/watch?v=O7OGieXHM5g&list=AL94UKMTqg-9AYWb49qcFdqYVR-wmfaov7"
    , "White Lounge ": "http://www.youtube.com/watch?v=OTU1n0lsRgE"
    , "Who wants to live forever": "https://www.youtube.com/watch?v=BYOE_b4aYD0"
    , "Wild About That Girl": "http://www.youtube.com/watch?v=YxdMHZpp8f4"
    , "You and I": "http://www.youtube.com/watch?v=sc47le0Byq0"
    , "You`re Beautiful": "http://www.youtube.com/watch?v=D-26kipcM5g"
    , "You`re My Angel": "https://www.youtube.com/watch?v=kUfVE8WZQNk"
    , "You raise me up 1": "http://www.youtube.com/watch?v=7jfMoa912fY"
    , "You raise me up 2": "https://www.youtube.com/watch?v=aJxrX42WcjQ"
  };
  return printObj(musicObj);

};

//----------------------------------------------------------------------------

function nodejs() {
  document.getElementById("display_pane").innerHTML = node();
}
;

var node = function() {

  var nodeObj = {
    "API": "http://nodejs.org/api/all.html"
    , "Avocado": "http://localhost:8005/index.html"
    , "Beginner Book": "http://www.nodebeginner.org/"
    , "Beginner`s Tutorial": "http://project70.com/nodejs/beginners-tutorial-node-js/"
    , "Buffer": "https://github.com/coolaj86/browser-buffer"
    , "commander": "https://npmjs.org/package/commander"
    , "config": "https://npmjs.org/doc/config.html"
    , "What is it good for?": "http://readwrite.com/2011/01/25/wait-whats-nodejs-good-for-aga"
    , "EJS [puke]": "http://embeddedjs.com/"
    , "Event-driven programming": "http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/"
    , "Everyone`s talking about it": "http://mashable.com/2011/03/10/node-js/"
    , "exports (github)": "https://github.com/vesln/exports"
    , "express (npm.js)": "https://npmjs.org/package/express"
    , "express js": "http://expressjs.com/"
    , "Express Guide": "http://expressjs.com/guide.html"
    , "express-locale": "https://npmjs.org/package/express-locale"
    , "First Look": "http://www.lynda.com/Nodejs-tutorials/Nodejs-First-Look/101554-2.html"
    , "fs": "http://nodejs.org/api/fs.html#fs_file_system"
    , "for beginners": "http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/"
    , "fs.writeFile()": "http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback"
    , "Get started": "http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js"
    , "gobbledygook": "https://npmjs.org/package/gobbledygook"
    , "habitat (library)": "https://github.com/brianloveswords/habitat"
    , "How to Node": "http://howtonode.org/streams-explained"
    , "Intro by Ryan Dahl": "http://www.youtube.com/watch?v=jo_B4LTHi3I"
    , "joyent/node": "https://github.com/joyent/node/wiki/modules"
    , "Mailing list": "https://groups.google.com/forum/?fromgroups#!forum/nodejs"
    , "Mixu`s Node book": "http://book.mixu.net/ch1.html"
    , "mkpath": "https://npmjs.org/package/mkpath"
    , "Node by Example": "http://blog.osbutler.com/categories/node-by-example/?page=3"
    , "Nodecasts": "http://nodecasts.net/"
    , "Nodecore vs Userland": "https://github.com/joyent/node/wiki/node-core-vs-userland"
    , "Nodeguide": "http://nodeguide.com/"
    , "NodeJS on Fedora": "http://fedoraproject.org/wiki/Features/NodeJS"
    , "Node Tuts": "http://nodetuts.com/"
    , "Node wiki": "https://github.com/joyent/node/wiki"
    , "npm cheatsheet": "http://blog.nodejitsu.com/npm-cheatsheet"
    , "NPMjs": "https://npmjs.org/"
    , "package.json": "https://npmjs.org/doc/json.html"
    , "nodejitsu": "http://package.json.nodejitsu.com/"
    , "path": "http://nodejs.org/docs/v0.4.9/api/path.html"
    , "path.join()": "http://nodejs.org/api/path.html#path_path_join_path1_path2"
    , "Pay attention to Node.js": "http://readwrite.com/2010/10/20/why-developers-should-pay-atte"
    , "Presented by Ryan Dahl": "http://www.infoq.com/presentations/nodejs"
    , "request 1": "https://github.com/mikeal/request"
    , "require()": "https://npmjs.org/package/require"
    , "request 2":"https://npmjs.org/package/request"
    , "Style guide": "http://nodeguide.com/style.html"
    , "20 challenges in Node.js": "http://nodejs.org/jsconf-eu-2010.pdf"
    , "typeof": "https://npmjs.org/package/typeof"
    , "understanding ~": "http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb"
  };


  return printObj(nodeObj);

};

//===============================================================
function php() {
  document.getElementById("display_pane").innerHTML = phpFunc();

}
;

var phpFunc = function() {
  var phpObj = {
    "Arrays": "http://zenit.senecac.on.ca/~int322_123a07/practice/121025_arrays.php"
    , "Asgmt 1 ": "http://zenit.senecac.on.ca/~int322_123a07/assign1/add.php"
    , "Asgmt 2 ": "https://zenit.senecac.on.ca/~int322_123a07/assign2/login.php"
    , "Caseless": "http://zenit.senecac.on.ca/~int322_123a07/practice/caseless.php"
    , "Classes 01": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_01.php"
    , "Classes 02": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_02.php"
    , "Lab 5-1": "http://zenit.senecac.on.ca/~int322_123a07/lab5/cookies.php"
    , "DB thru classes": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_class_db_01.php"
    , "Encrypting": "http://zenit.senecac.on.ca/~int322_123a07/practice/121120_encrypting.php"
    , "Escaping (advanced)": "http://zenit.senecac.on.ca/~int322_123a07/practice/121024_advanced_escaping_001.php"
    , "Lab 1 ": "http://zenit.senecac.on.ca/~int322_123a07/lab1/lab1.php"
    , "Lab 2 ": "http://zenit.senecac.on.ca/~int322_123a07/lab2/forms-part3.php"
    , "Lab 3 ": "http://zenit.senecac.on.ca/~int322_123a07/lab3/mysqlform.php"
    , "Lab 4-1 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv.php"
    , "Lab 4-2 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv2.php"
    , "Lab 4-3 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv3.php"
    , "Lab 4-4 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_4.php"
    , "Lab 4-5 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_5.php"
    , "Lab 4-6 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_6.php"
    , "Lab 5-2a": "http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php"
    , "Lab 5-2b": "http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php"
    , "Lab 6": "http://zenit.senecac.on.ca/~int322_123a07/lab6/myClasses.php"
    , "Lab6": "http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php"
    , "oo-login.php": "http://zenit.senecac.on.ca/~int322_123a07/lab6/oo-login.php"
    , "testMenu.php": "http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php"
    , "login prx": "http://zenit.senecac.on.ca/~int322_123a07/practice/login_prx.php"
    , "My_class": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_destructor_01.php"
    , "Reg Ex": "http://zenit.senecac.on.ca/~int322_123a07/practice/121028_regex.php"
    , "Salve!": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_specialMethodsPHP5_test.php"
    , "Strings": "http://zenit.senecac.on.ca/~int322_123a07/practice/121028_strings.php"
    , "a.php": "http://zenit.senecac.on.ca/~int322_123a07/practice/templating/a.php"
    , "cc.html": "http://zenit.senecac.on.ca/~int322_123a07/practice/templating/cc.html"
    , "dd.php": "http://zenit.senecac.on.ca/~int322_123a07/practice/templating/dd.php"
    , "ff.php": "http://zenit.senecac.on.ca/~int322_123a07/ff.php"
    , "gg.php": "http://zenit.senecac.on.ca/~int322_123a07/gg.php"
    , "hh.php": "http://zenit.senecac.on.ca/~int322_123a07/hh.php"
    , "test1.php": "http://zenit.senecac.on.ca/~int322_123a07/practice/test1.php"



  };

  return printObj(phpObj);



};
//----------------------------------------------------------------------------
function p_t(){
  document.getElementById("display_pane").innerHTML = p_tFunc();
};
var p_tFunc = function(){
  var p_tObj =  {
    "Devil`s under my feet":"http://www.youtube.com/watch?v=D_TXYEmqn6U"
    , "Doubt, Fear, and Unbelief":"http://www.youtube.com/watch?v=NomZHolreBk"
    , "God`s healing Power" : "http://www.youtube.com/watch?v=553lN-JaHAI"
    , "God`s Medicine":"http://www.youtube.com/watch?v=d2Wp5_bL338"
    , "Hagin (playlist)":"http://www.youtube.com/playlist?list=PL4C095CACCE805213"
    , "Hagin (JehToday)" : "http://www.youtube.com/user/JehToday/search?query=Hagin"
    , "Why speak in tongues" : "http://www.youtube.com/watch?v=ysI9wMt09OU"
    , "Words & Confessions" : "http://www.youtube.com/watch?v=bSkSreKP_3g"

  };


  return printObj(p_tObj);
};

//----------------------------------------------------------------------------
function p_w() {
  document.getElementById("display_pane").innerHTML = p_wFunc();

}
;

var p_wFunc = function() {
  var p_wObj = {
    "Eighth Wonder": "http://www.youtube.com/watch?v=WUJSElja3d4"
    , "I'll be around": "http://www.youtube.com/watch?v=1IrH1tKyJQ0"
    , "I will enter His Gates 1": "https://www.youtube.com/watch?v=aLcpLD5DHDU"
    , "I will enter His Gates 2": "https://www.youtube.com/watch?v=nr_YiSZ8KBc"
    , "Maranatha Double Praise 01": "https://www.youtube.com/watch?v=F3X0KhvJwsQ"
    , "Lord`s Prayer, the (M.W.Smith)": "http://www.youtube.com/watch?v=tZFqlYLGoGY"
    , "Maranatha Double Praise 02": "https://www.youtube.com/watch?v=jfAbAOI-aj0"
    , "Maranatha Double Praise 03": "https://www.youtube.com/watch?v=Z_Sg93io5c4"
    , "Maranatha Double Praise 04": "https://www.youtube.com/watch?v=dd0O7GPR6QE"
    , "Maranatha Double Praise 08": "https://www.youtube.com/watch?v=Bl0R9AT0lPk"
    , "Maranatha Double Praise 11": "https://www.youtube.com/watch?NR=1&feature=endscreen&v=uyrxmG1Ctio"
    , "Maranathe Double Praise 14": "https://www.youtube.com/watch?v=Pce_M-XT8Jc"
    , "Open Sky - Iona": "https://www.youtube.com/watch?v=0c6g0HItFdg"
    , "Secret Ambition - M.W.Smith": "http://www.youtube.com/watch?v=2vHedm6ycsY"
    , "To the Ends of the Earth": "https://www.youtube.com/watch?v=UvD4kYus0rM"
  };


  return printObj(p_wObj);

};
//----------------------------------------------------------------------------

function selfdefense(){
  document.getElementById("display_pane").innerHTML = selfdefenseFunc();
};

var selfdefenseFunc = function(){

  var selfdefenseObj = {
   "Americana Move mounting":"http://www.youtube.com/watch?v=K6r8MkqeSMM&feature=relmfu"
   , "Chokefrom above -> Arm Bar":"http://www.youtube.com/watch?v=sS3iZ9rNaG8&feature=relmfu"
   , "Choke from under -> Arm Bar":"http://www.youtube.com/watch?v=fro50KwBDjg"
   , "Clothes Grab -> Leg Sweep":"http://www.youtube.com/watch?v=XfSBGZz_6Mc&feature=relmfu"
   , "Demo (Jiujitsu)":"http://www.youtube.com/watch?v=erQ7AVtcwec"
   , "Demo (part 1)":"http://www.youtube.com/watch?v=g6sZSC66ul4&feature=relmfu"
   , "Demo (part 2)":"http://www.youtube.com/watch?v=Y600l5UbR10&feature=relmfu"
   , "Demo (part 3)":"http://www.youtube.com/watch?v=EzSdD22BqXM&feature=relmfu"
   , "Kimura":"http://www.youtube.com/watch?v=HA-2NRuTLkw"
   , "Knock out":"http://www.youtube.com/watch?v=san7xnrCAQc"
   , "Mounting -> Closed Guard":"http://www.youtube.com/watch?v=9nrYaxOqmaQ&feature=relmfu"
   , "Mounted -> Kimura":"http://www.youtube.com/watch?v=Ed_BQaWtyck&feature=relmfu"
   , "Shoulder grab -> Hiji Gaeshi":"http://www.youtube.com/watch?feature=fvwp&v=CW5VpKC9ocU&NR=1"
   , "Top Cross Choke mounting":"http://www.youtube.com/watch?v=mtAtWH8dh7o&feature=relmfu"

 };


 return printObj(selfdefenseObj);

};
//----------------------------------------------------------------------------
function seneca(){
  document.getElementById("display_pane").innerHTML = senecaFunc();
};

var senecaFunc = function(){

  var senecaObj = {

    "ACS site ":"https://acs.senecac.on.ca/pages/index.php"
    , "Alam, Tanvir rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1738900"
    , "Book Buyback":"https://www2.senecacollege.ca/buyback/index.jsp"
    , "Boyczuk, Bob rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13003"
    , "Buchner, Mark rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1613500"
    , "CDOT activity tracking" : "http://rome.proximity.on.ca/projects/cdot_activity/wiki/Activity%20Reports/Webmaker"
    , "CDOT tracking (ehterp)":"https://etherpad.mozilla.org/trackingForCDOT"
    , "Client Services":"https://inside.senecac.on.ca/clientservices"
    , "Conkic, Nebojsa":"https://scs.senecac.on.ca/~nebojsa.conkic/dbs301_work.html"
    , "Conkic, Nebojsa rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13042"
    , "Czegel, Barb rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=17894"
    , "DBS301":"https://scs.senecac.on.ca/~nebojsa.conkic/dbs301_work.html"
    , "Douglas, Brian rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=50506"
    , "EAC397: Blackboard ":"https://my.senecacollege.ca/webapps/portal/frameset.jsp"
    , "Empath":"https://senepr.senecacollege.ca/Empath65/HrLogin.aspx"
    , "Frey, Don rated":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=11374"
    , "Heidenreich, Michal rating ":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=33852"
    , "INT222: Zenit":"https://zenit.senecac.on.ca/~int222_122b36/index.html"
    , "INT322: zenit ":"http://zenit.senecac.on.ca/~int322_123a07/"
    , "igor01 ":"http://igor01.azurewebsites.net/"
    , "Kaduri, Harvey`s rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13040"
    , "Kawenka, John rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=526261"
    , "Korsantia, Olga rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1607604"
    , "Laurin, Cindy`s BAC344":"http://zenit.senecac.on.ca/wiki/index.php/BAC344_03_2012"
    , "Laurin, Cindy`s rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=12975"
    , "Messinger, Gal rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1523999"
    , "Moodle":"https://open.senecac.on.ca/cms/"
    , "My Seneca":"https://my.senecacollege.ca/webapps/portal/frameset.jsp"
    , "Ohan, Emile`s INT222":"https://scs.senecac.on.ca/~emile.ohan/int222/index.html"
    , "Ohan, Emile rated":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13920"
    , "OOP244: Old Tests":"https://cs.senecac.on.ca/~oop244/pages/practice/oldTests.html"
    , "OOP244: Site ":"https://scs.senecac.on.ca/~oop244/"
    , "Oslopov, Petr rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1144727"
    , "Perry, Brian":"https://scs.senecacollege.ca/~brian.perry/"
    , "Perry, Brian`s rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=32480"
    , "Richards, Peter rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=165590"
    , "Seneca College":"http://www.senecacollege.ca/index.html"
    , "SCS":"https://scs.senecac.on.ca/"
    , "Seneca Client Services":"https://inside.senecac.on.ca/clientservices"
    , "Seneca Campus Bus Schedule ":"https://inside.senecac.on.ca/transportation/campusbuses.html"
    , "Seneca Email":"https://portal.microsoftonline.com/IWDefault.aspx"
    , "Seneca Experience":"http://seneca.experience.com/experience/login"
    , "Seneca Staff List":"https://scs.senecac.on.ca/staff-list"
    , " SeneNET ":"https://net1.senecac.on.ca/login.pl?action=paint;source=10.255.137.89;destination=http%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dsenenet;r=s0QwcIi7276"
    , "SIRIS":"https://siris.senecac.on.ca/"
    , "Surendra, Sam rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=52138"
    , "SYS366: Moodle ":"https://open.senecac.on.ca/cms/"
    , "SYS366: Zenit":"http://zenit.senecac.on.ca/~sys366_122b02/"
    , "Time-sheet":"http://rome.proximity.on.ca/ts/index.php"
    , "Tipson, Ian":"http://warp.senecac.on.ca/ian.tipson/default.aspx"
    , "Tipson, Ian`s site":"http://iantipson.com/"
    , "Tipson, Ian rating":"http://www.ratemyprofessors.com/ShowRatings.jsp?tid=12967"
    , "WABS":"https://www2.senecacollege.ca/wabs/"
    , "WIN210 site ":"https://cs.senecac.on.ca/~fac/win210/"

  };

  return printObj(senecaObj);

};
//----------------------------------------------------------------------------

function tolkiniana() {
  document.getElementById("display_pane").innerHTML = tolkinianaFunc();

}
;
var tolkinianaFunc = function() {

  var tolkienianaObj = {
    "Aniron": "http://www.youtube.com/watch?v=Q6hJqI5BEW8"
    , "Arda ": "http://www.glyphweb.com/arda/default.asp"
    , "Battle for Middle Earth": "https://www.youtube.com/watch?v=suNT5m4_rYI"
    , "Born Of Hope": "http://www.youtube.com/watch?v=qINwCRM8acM"
    , "Children of Hurin": "https://www.youtube.com/watch?v=HtoQWb0jMco"
    , "Elvish ABC ": "http://www.starchamber.com/paracelsus/elvish/elvish-in-ten-minutes.html"
    , "Facts behind Fiction": "https://www.youtube.com/watch?v=krqmf5oBDXk"
    , "Hisweloke ": "http://www.jrrvf.com/hisweloke/sindar/online/sindarin.html"
    , "Hobbit, The": "https://www.youtube.com/watch?v=A7jYQFTV7EM"
    , "Hunt For Gollum, The": "http://www.youtube.com/watch?annotation_id=annotation_486943&feature=iv&src_vid=9H09xnhlCQU&v=VaakJk9vR7U"
    , "Lewis & Tolkien": "https://www.youtube.com/watch?v=iNhCMReS_M4"
    , "LOTR, The": "https://www.youtube.com/watch?v=mfFQuhWaA_k"
    , "Master of the M. Earth": "https://www.youtube.com/watch?v=orhnSy4wkqE&list=PL5760D4D3699A3871"
    , "Middle Earth 1": "https://www.youtube.com/watch?v=Ew4bsGF0G8U"
    , "Middle Earth 2":"https://www.youtube.com/watch?v=UlT1mRYlXZg"
    , "Monaghan Wood Interview": "https://www.youtube.com/watch?v=27_OmRGPfZw"
    , "Myths": "https://www.youtube.com/watch?v=NzBT39gx-TE"
    , "Queen Gandalf ": "https://www.youtube.com/watch?v=G3gR0m2mCGs"
    , "Ranger ": "http://www.youtube.com/watch?v=zf3Kit2V0CI"
    , "Silmarillion 1": "https://www.youtube.com/watch?v=0J1JSLzja7E"
    , "Silmarillion 2":"https://www.youtube.com/watch?v=HJLwB3zNY3Q"
    , "Tolkien Gateway": "http://tolkiengateway.net/wiki/Main_Page"
    , "Wood Laughs": "https://www.youtube.com/watch?v=HYpjI8ht-K4"

  };


  return printObj(tolkienianaObj);

};
//----------------------------------------------------------------------------

function transifex() {
  document.getElementById("display_pane").innerHTML = transifexFunc();
}
;

var transifexFunc = function() {
  var transifexObj = {
    "Amore": "https://www.transifex.com/projects/p/amore/"
    , "Login.webmaker.org": "https://www.transifex.com/projects/p/loginwebmakerorg/"
    , "Managing your project": "http://help.transifex.com/intro/projects.html#managing-your-project"
    , "Projects": "http://help.transifex.com/intro/projects.html#projects"
    , "Transifex": "https://www.transifex.com/"
    , "Transifex - help": "http://help.transifex.com/contents.html"
    , "Translations": "http://help.transifex.com/features/api/api-v2.html#translations"
    , "Webmaker.org": "https://www.transifex.com/projects/p/webmakerorg/"

  };
  return printObj(transifexObj);
}; // end of videoFunc()

//----------------------------------------------------------------------------

function unsorted() {
  document.getElementById("display_pane").innerHTML = unsortedFunc();

}
;
var unsortedFunc = function() {
  var unsortedObj = {
    "123Greetings": "http://www.123greetings.com/"
    , "15kop": "http://15kop.ru/"
    , "1812": "http://www.1812.gc.ca/eng/1305654894724/1305655293741"
    , "337 Queens York Rangers 1": "https://www.facebook.com/337Rangers"
    , "337 Queens York Rangers 2": "http://337rangerscadets.ca/"
    , "Academic Workspace": "https://aw.tdsb.on.ca/TdsbLogin.aspx"
    , "AccuWeather": "http://www.accuweather.com/en/ca/north-york/m2m/weather-forecast/49569"
    , "Acronym Creator": "http://acronymcreator.net/"
    , "Acronym Finder ": "http://www.acronymfinder.com/"
    , "AdlerKurort": "http://www.adlerkurortsochi.ru/"
    , "AImS": "https://www.google.ca/advanced_image_search?as_st=y&hl=en&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&biw=1366&bih=675&q=a&tbs=ic:trans,iar:s&tbm=isch"
    , "Alexeiev, Anton": "http://we.easyelectronics.ru/my/antonluba/"
    , "All Wheels Driver": "http://www.allwheelsdriver.ca/"
    , "AnswersInGenesis": "http://www.answersingenesis.org/"
    , "ASL Pro": "http://www.aslpro.com/"
    , "Audacity Sound Editor": "http://audacity.sourceforge.net/"
    , "AudioTreasure": "http://www.audiotreasure.com/"
    , "Average World Wages ": "http://www.bbc.co.uk/news/magazine-17543356"
    , "Azure Sign in": "https://login.live.com/login.srf?cbcxt=azu&vv=1100&lc=1033&wa=wsignin1.0&wtrealm=urn:federation:MicrosoftOnline&wctx=wa%3Dwsignin1.0%26rpsnv%3D2%26ct%3D1362585567%26rver%3D6.1.6206.0%26wp%3DSAPI_LONG%26wreply%3Dhttps:%252F%252Fmanage.windowsazure.com:443%252F%253Fhashseg%253DWorkspaces%252FWebsiteExtension%252FWebsite%252Figor01%252Fdashboard%26lc%3D1033%26id%3D500879%26cbcxt%3Dazu&wfresh=0"
    , "Behind The Name": "http://www.behindthename.com/"
    , "Benson Sound": "http://www.bensonsound.com/catalog/atoz.cfm"
    , "Bible Audio": "http://boglubittebja.ru/bible.php"
    , "Bible in Japanese" : "http://bible.salterrae.net/en/"
    , "bibledice": "http://www.bibledice.com/scripture.php"
    , "Biblos: Hebrew translit": "http://transliterated.interlinearbible.org/proverbs/1.htm"
    , "Blagovestvuy Narod ": "http://blagovestvui-narod.blogspot.ca/"
    , "Blockless.com": "https://www.blockless.com/account/member#.UfpoUVNXZZ0"
    , "Blogger": "http://www.blogger.com/home"
    , "Blue Letter Bible": "http://www.blueletterbible.org/index.cfm"
    , "Bodybuilding.com": "http://www.bodybuilding.com/"
    , "Calvary Chapel": "http://www.calvarychapel.com/"
    , "Canada Post": "http://www.canadapost.ca/cpo/mc/default.jsf"
    , "Canadian Tire": "http://www.canadiantire.ca/home.jsp?site=WebStore"
    , "Cantonese, Learn 1": "http://cantonese.ca/"
    , "Cantonese, Learn 2": "http://www.cantonese.sheik.co.uk/"
    , "Cantonese to Jyutping": "http://hktv.cc/hp/cantonesetojyutping/"
    , "Cardiac Arrest Help": "http://ahsc.arizona.edu/node/730"
    , "CBC ": "http://www.cbc.ca/"
    , "CBN news": "http://www.youtube.com/user/CBNnewsonline?feature=watch"
    , "CDOT": "http://zenit.senecac.on.ca/wiki/index.php/Main_Page"
    , "CBN.com": "http://www.cbn.com/"
    , "Chuck Norris Facts": "http://www.chucknorrisfacts.com/"
    , "CIC": "http://www.cic.gc.ca/english/"
    , "Collusion": "http://www.mozilla.org/en-US/collusion/"
    , "Conservapedia": "http://conservapedia.com/Main_Page"
    , "Coursera": "https://class.coursera.org/intrologic-003/class/index"
    , "CPYU ": "http://cpyu.org/Default.aspx"
    , "Creation.com": "http://creation.com/"
    , "Cronometer.com": "http://cronometer.com/"
    , "Culinary fruit, list": "http://en.wikipedia.org/wiki/List_of_culinary_fruits"
    , "Cyrillic Decoder": "http://2cyr.com/decode/?lang=en"
    , "Dafont": "http://www.dafont.com/"
    , "David Ingles Min`s ": "http://diministries.org/"
    , "Day Spring ": "http://ecards.dayspring.com/ecards/"
    , "Domain.com ": "http://www.domain.com/"
    , "Do Not Track Me!": "http://storytellinginnovationlab2013.github.io/donottrack/demo.html"
    , "Don Valley JHS ": "http://schools.tdsb.on.ca/donvalleyjhs/"
    , "DV LOTTERY ": "https://www.dvlottery.state.gov/"
    , "Eastern Hemisphere": "http://polusharie.com/"
    , "Emelyanenko highlights": "http://www.youtube.com/watch?v=PCvWiBZusFE"
    , "Empire Life": "https://pmw.empire.ca/pmwweb/login.jsp"
    , "EEC": "http://media.dbw.cn/ntv/more/xlym/,P=0,ID=630OS6Y2V911V2Y0.shtml"
    , "Ephemeris": "http://ephemeris.alcuinus.net/"
    , "Experience.com": "http://www.experience.com/entry-level-jobs/"
    , "Facebook": "http://www.facebook.com/"
    , "Find a Driving School": "http://find-a-driving-school.ca/"
    , "Fonetiks.org": "http://fonetiks.org/"
    , "FoxNews": "http://www.foxnews.com/"
    , "Free Dictionary": "http://www.thefreedictionary.com/"
    , "Futureshop": "http://www.futureshop.ca/en-ca/home.aspx"
    , "Haier": "http://www.futureshop.ca/en-CA/category/haier/haier.aspx"
    , "GIF bin": "http://www.gifbin.com/"
    , "Gmail ": "http://mail.google.com/mail/u/0/?shva=1#inbox"
    , "Gmail Inbox ": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=http://mail.google.com/mail/&scc=1<mpl=default<mplcache=2"
    , "Google Translate": "http://translate.google.com/"
    , "Gorodok": "http://gorodok.tv/"
    , "Got Questions? ": "http://gotquestions.org/"
    , "Govorilka": "http://www.vector-ski.ru/vecs/govorilka/"
    , "GPA calculator": "http://gpacalculator.net/gpa-scale/3-1-gpa/"
    , "Gravatar.com": "http://en.gravatar.com/"
    , "Guitar Tuner": "http://www.gieson.com/Library/projects/utilities/tuner/"
    , "Habrahabr": "http://habrahabr.ru/"
    , "Hebrew For Christians ": "http://www.hebrew4christians.com/index.html"
    , "Home Depot": "http://www.homedepot.ca/"
    , "Howjsay.com": "http://www.howjsay.com/"
    , "ICIA": "http://www.jimharper.org/icia.html"
    , "IPA in Unicode": "http://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm"
    , "IPAcharts with audio": "http://www.yorku.ca/earmstro/ipa/index.html"
    , "IPA transcriber": "http://project-modelino.com/english-phonetic-transcription-converter.php?"
    , "IPA converter 1": "http://theaccentlab.com/tools/phonemic-converter/"
    , "IPA converter 2": "http://www.photransedit.com/online/text2phonetics.aspx"
    , "Ikea": "http://www.ikea.com/ca/en/"
    , "IMDb ": "http://www.imdb.com/"
    , "Indigo Books & Music": "http://www.chapters.indigo.ca/home/"
    , "Jesus Is Lord ": "http://www.jesus-is-lord.com/"
    , "Jim Carrey": "http://www.jimcarrey.com/"
    , "Job Interview Tips ": "https://www.youtube.com/watch?v=wllwJM6EyOI"
    , "Jokes from Russia": "http://www.anekdot.ru/"
    , "Kinopoisk": "http://www.kinopoisk.ru/"
    , "Kirkpatrick`s": "http://www.kpatricks.com/"
    , "Lenscrafters": "http://www.lenscrafters.com"
    , "Leo": "http://dict.leo.org/ende/index_en.html"
    , "Linked In": "http://www.linkedin.com/"
    , "Listverse": "http://listverse.com/"
    , "Living Well Family Church": "http://livingwellfc.org/"
    , "LDOCE": "http://www.ldoceonline.com/"
    , "LostFilm": "http://www.lostfilm.tv/"
    , "Lumosity": "https://www.lumosity.com/login"
    , "Maniac World": "http://www.maniacworld.com/"
    , "Math is fun": "http://www.mathsisfun.com/index.htm"
    , "Movie25 ": "http://movie25.com/"
    , "Mozilla Press Center": "https://blog.mozilla.org/press/"
    , "MyAccount": "http://www.cra-arc.gc.ca/myaccount/"
    , "My Drive @ Google": "https://docs.google.com/?tab=mo&authuser=0#home"
    , "mx-mx": "http://mx-mx.com/lab/cizzle/#/curiosity"
    , "netflix": "http://movies.netflix.com/WiHome"
    , "Next Bus": "http://www.nextbus.com/predictor/stopSelector.jsp?a=ttc"
    , "Nexus 4 (Google)": "http://www.google.ca/nexus/4/"
    , "Nurgitz, Richard": "http://brimleydental.com/dr_n.html"
    , "Odnoklassninki": "http://www.odnoklassniki.ru"
    , "On becoming Baby-wise": "http://en.wikipedia.org/wiki/On_Becoming_Baby_Wise"
    , "Ontario": "http://www.ontario.ca/welcome-ontario"
    , "OpenDNS": "http://www.opendns.com/"
    , "Oracle.com": "http://www.oracle.com/index.html"
    , "Oper.ru": "http://oper.ru/"
    , "Oriole CC": "http://www.toronto.ca/parks/prd/facilities/complex/714/"
    , "Overstock": "http://www.overstock.com/"
    , "Papa Huhu": "http://www.papahuhu.com/"
    , "Passport (RF) at 14" : "http://passportist.ru/index.php?option=com_content&view=article&id=38&Itemid=137"
    , "Paul Robertson ": "http://paulrobertson.ca/"
    , "PeanutPlaza": "http://www.peanutplaza.ca/"
    , "People`s Church": "http://www.thepeopleschurch.ca/default.asp"
    , "Picasa ": "https://picasaweb.google.com/home"
    , "Pink Cross ": "https://www.thepinkcross.org/"
    , "Popcorn Maker": "https://popcorn.webmaker.org/"
    , "porusski.net": "http://winrus.com/klava.htm"
    , "President`s Choice Financial": "http://www.pcfinancial.ca/"
    , "Propublica": "http://www.propublica.org/"
    , "PSG Names": "http://scriptsource.org/cms/scripts/page.php?item_id=entry_detail&uid=j5k8l4plf5"
    , "Frankie Tomatto`s": "http://frankietomatto.com/index.php"
    , "Psychological resilience": "http://en.wikipedia.org/wiki/Psychological_resilience"
    , "Mandarin": "http://www.mandarinrestaurant.com/"
    , "Swiss Chalet": "http://www.swisschalet.com/"
    , "Rate My Professors ": "http://www.ratemyprofessors.com/"
    , "RBC jobs ": "https://performancemanager4.successfactors.com/career?company=RBC"
    , "Reddit": "http://en.reddit.com/"
    , "Sears": "http://www.sears.ca/"
    , "Sears Financial": "https://online.chasecanada.ca/ChaseCanada_Consumer/Login.do"
    , "SGU": "http://en.sutr.ru/"
    , "Sheep Laughs, The": "http://www.sheeplaughs.com/"
    , "Simplish": "http://www.simplish.org/"
    , "Slashdot": "http://slashdot.org/"
    , "Slid.es": "https://slid.es/igoryentaltsev/new"
    , "Snopes": "http://www.snopes.com/"
    , "Snorgtees": "http://www.snorgtees.com/"
    , "Soul Surfer": "http://soulsurfer.com/index.html"
    , "SouthMouth ": "http://usadeepsouth.ms11.net/southmouth.html"
    , "Speed Test": "http://www.speedtest.net/"
    , "Subzin ": "http://www.subzin.com/"
    , "Sun Life Financial": "https://www.sunnet.sunlife.com/signin/mysunlife/home.wca"
    , "SaaS": "http://www.supersaas.com/"
    , "Surrealisms": "http://www.ravenblack.net/random/surreal.html"
    , "Target": "http://www.target.ca/en/GO?ref=ca_tgt_adv_xs_GO_Mar2013"
    , "TB Bank": "http://www.tdcanadatrust.com/products-services/banking/index-banking.jsp?cm_sp=cBRAND003-087"
    , "TDSB choices": "http://www.tdsb.on.ca/_site/ViewChoices.asp?siteid=120&menuid=431&pageid=337"
    , "TechToTalk": "http://techtotalk.com/"
    , "TekSavvy ": "http://teksavvy.com/"
    , "TextFixer ": "http://www.textfixer.com/html/convert-word-to-html.php/"
    , "tfile.me": "http://tfile.me/"
    , "Thimble": "https://thimble.webmaker.org/en-US/"
    , "Tim Hortons": "http://www.timhortons.com/ca/en/index.html"
    , "Toronto Festivals and Events Calendar": "http://wx.toronto.ca/festevents.nsf/all?openform"
    
    , "TTC": "http://www.ttc.ca/"
    , "Tumblr": "https://www.tumblr.com/"
    , "Twelve Chairs, The 1": "http://lib.ru/ILFPETROV/ilf_petrov_12_chairs_engl.txt"
    , "Twelve Chairs, The 2": "http://www.lib.ru/ILFPETROV/dwenadcatx.txt"
    , "Twitter ": "https://twitter.com"
    , "UPODN": "http://upodn.com/"
    , "Urban Dictionary ": "http://www.urbandictionary.com/"
    , "V Kontakte": "http://vk.com/feed"
    , "Vidiyo": "https://v.mozilla.com/flex.html?csrf_tkn=E549181F441C34A40A78F3EF3AF006D8"
    , "Walmart": "http://www.walmart.ca/en"
    , "War Amps": "http://www.waramps.ca/home.html"
    , "Webchaynik (rus webmaker)": "http://www.webchaynik.ru/"
    , "Webmaker": "https://webmaker.org/en-US/"
    , "Webmaker.MoFoStaging": "http://webmaker.mofostaging.net/"
    , "Webster 1828 ": "http://www.webster1828.com/"
    , "What`s my IP address ": "http://whatismyipaddress.com/"
    , "What`s New on Netflix": "http://can.whatsnewonnetflix.com/"
    , "What week is it?": "http://whatweekisit.com/"
    , "Wikipedia": "http://en.wikipedia.org/wiki/Main_Page"
    , "Wikipedia, La": "http://la.wikipedia.org/wiki/Pagina_prima"
    , "Wikipedia, Ru": "http://ru.wikipedia.org"
    , "Wiktionary": "http://en.wiktionary.org/wiki/Wiktionary:Main_Page"
    , "Wind": "https://shop.windmobile.ca/services/topup/topup.aspx"
    , "WordPress": "http://wordpress.com/"
    , "can wonderland": "https://www.canadaswonderland.com/"
    , "xxxchurch.com ": "http://www.xxxchurch.com/"
    , "Ya Plakal": "http://fotozhaba.yaplakal.com/"
    , "Youtube": "http://www.youtube.com/"
    , "Youtube/999CrypticAFV ": "http://www.youtube.com/user/crypticafv?feature=results_main"
    , "Yummy Market ": "http://www.yummymarket.com/"
    , "Z Movie TV ": "http://www1.zmovie.tv/"
    , "Zhong Wen": "http://www.zhongwen.com/"

  };


  return printObj(unsortedObj);
};

//----------------------------------------------------------------------------

function video(){
  document.getElementById("display_pane").innerHTML = videoFunc();
};

var videoFunc = function(){

  var videoObj = {

    "Aloisius":"https://www.youtube.com/watch?v=vZ3gxKCgtEU"
    , "Bubentsov before firing squad ":"https://www.youtube.com/watch?v=LC1d_2lschs"
    , "Bubentsov`s story ":"https://www.youtube.com/watch?v=XVsIeZW3OFU"
    , "Castle & Beckett":"https://www.youtube.com/watch?v=WSpiVm6BkeA"
    , "Eltsin & Clinton":"http://www.youtube.com/watch?v=3eiIMZQWkdQ"
    , "Moon-rise":"http://vimeo.com/58385453"
    , "Gun Control":"http://www.youtube.com/watch?v=pnIbwWEH4UA"
    , "In the blue sea...":"https://www.youtube.com/watch?v=-o9-r26b--E"
    , "Inside Saudi Kingdom":"http://www.youtube.com/watch?v=au9Aqd_-2hc"
    , "Is this your church":"http://www.youtube.com/watch?v=ua0anM-afY0"
    , "It`s Possible!":"https://www.youtube.com/watch?v=r8jP8UJFWso"
    , "Last Year`s Snow was falling":"http://www.youtube.com/watch?v=PwxwqVDnUmc"
    , "猛龍過江":"https://www.youtube.com/watch?v=Wgprb0KcYmw"
    , "Magneto`s Revenge ":"https://www.youtube.com/watch?v=Hyw8973Ql30"
    , "Minkova Milena Latine ":"https://www.youtube.com/watch?v=x3giQCbs7SA"
    , "Monty Python ":"https://www.youtube.com/watch?v=eOfI88NKRzY&feature=endscreen&NR=1"
    , "Netflix - from outside US": "http://www.youtube.com/watch?v=4tBUbSrorV4"
    , "Our Father":"http://www.youtube.com/watch?v=7Wl-OZ3breE"
    , "Prometheus Explained":"http://www.youtube.com/watch?v=GpEx7pdp2-Q"
    , "Russian guy speaking Latin":"https://www.youtube.com/watch?v=yM_XkP6HMU4&list=PL1CE2A366DFCCCFB5"
    , "Saving Pr. Ryan":"http://www.youtube.com/watch?v=1r8zgU7wE8w"
    , "Seven Seconds to Sell Yourself":"https://www.youtube.com/watch?v=5-ZpP4j09s0"
    , "Terentius et Milena ":"https://www.youtube.com/watch?v=mi_6LIPEP7M"
    , "Three Killer Questions at Interview ":"https://www.youtube.com/watch?v=jdDlmb-lgXk"
  };

  
  

  return printObj(videoObj);

}; // end of videoFunc()
//==========================================================================

//--------------------------------------------------------------------------
function webdev() {
  document.getElementById("display_pane").innerHTML = webdevFunc();
}
;

var webdevFunc = function() {

  var webdevObj = {
    "Accept-Language": "http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4"
    , "action=": "http://www.w3schools.com/tags/att_form_action.asp"
    , "addColorStop()": "http://www.w3schools.com/tags/canvas_addcolorstop.asp"
    , "alert()": "http://www.w3schools.com/jsref/met_win_alert.asp"
    , "arc()": "http://www.w3schools.com/tags/canvas_arc.asp"
    , "back()": "http://www.w3schools.com/jsref/met_his_back.asp"
    , "beginPath()": "http://www.w3schools.com/tags/canvas_beginpath.asp"
    , "bgColor=": "http://www.w3schools.com/tags/att_body_bgcolor.asp"
    , "canvas": "http://www.w3schools.com/html/html5_canvas.asp"
    , "ceil()": "http://www.w3schools.com/jsref/jsref_ceil.asp"
    , "charset=": "http://www.w3schools.com/jsref/prop_anchor_charset.asp"
    , "codeexamples (ether)": "https://etherpad.mozilla.org/codeexamples"
    , "confirm()": "http://www.w3schools.com/jsref/met_win_confirm.asp"
    , "createLinearGradient()": "http://www.w3schools.com/tags/canvas_createlineargradient.asp"
    , "createRadialGradient()": "http://www.w3schools.com/tags/canvas_createradialgradient.asp"
    , "Date": "http://www.w3schools.com/js/js_obj_date.asp"
    , "display a clock": "http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock"
    , "drawImage()": "http://www.w3schools.com/tags/canvas_drawimage.asp"
    , "ElasticSearch": "http://www.elasticsearch.org/"
    , "ElasticSearch tutorial": "http://www.elasticsearchtutorial.com/elasticsearch-in-5-minutes.html"
    , "elements": "http://www.w3schools.com/jsref/coll_form_elements.asp"
    , "Environment variables work": "http://kleeschulte.blogspot.ca/2008/06/how-environment-variables-really-work.html"
    , "eval()": "http://www.w3schools.com/jsref/jsref_eval.asp"
    , "fieldset": "http://www.w3schools.com/tags/tag_fieldset.asp"
    , "fillRect()": "http://www.w3schools.com/tags/canvas_fillrect.asp"
    , "fillStyle": "http://www.w3schools.com/tags/canvas_fillstyle.asp"
    , "fillText()": "http://www.w3schools.com/tags/canvas_filltext.asp"
    , "floor()": "http://www.w3schools.com/jsref/jsref_floor.asp"
    , "font=": "http://www.w3schools.com/tags/canvas_font.asp"
    , "Font Awesome": "http://fortawesome.github.io/Font-Awesome/"
    , "forms": "http://www.w3schools.com/jsref/coll_doc_forms.asp"
    , "forward()": "http://www.w3schools.com/jsref/met_his_forward.asp"
    , "function": "http://www.w3schools.com/js/js_functions.asp"
    , "getElementById()": "http://www.w3schools.com/jsref/met_doc_getelementbyid.asp"
    , "getDay()": "http://www.w3schools.com/jsref/jsref_getday.asp"
    , "getFullYear()": "http://www.w3schools.com/jsref/jsref_getfullyear.asp"
    , "getTime()": "http://www.w3schools.com/jsref/jsref_gettime.asp"
    , "go()": "http://www.w3schools.com/jsref/met_his_go.asp"
    , "history": "http://www.w3schools.com/jsref/obj_history.asp"
    , "host": "http://www.w3schools.com/jsref/prop_loc_host.asp"
    , "hostname": "http://www.w3schools.com/jsref/prop_loc_hostname.asp"
    , "innerHTML=": "http://www.w3schools.com/jsref/prop_html_innerhtml.asp"
    , "lastModified": "http://www.w3schools.com/jsref/prop_doc_lastmodified.asp"
    , "length": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    , "lineTo()": "http://www.w3schools.com/tags/canvas_lineto.asp"
    , "links": "http://www.w3schools.com/jsref/coll_doc_links.asp"
    , "location": "http://www.w3schools.com/jsref/obj_location.asp"
    , "max()": "http://www.w3schools.com/jsref/jsref_max.asp"
    , "min()": "http://www.w3schools.com/jsref/jsref_min.asp"
    , "MongoDB": "http://www.mongodb.org/"
    , "moveTo()": "http://www.w3schools.com/tags/canvas_moveto.asp"
    , "meta": "http://www.w3schools.com/tags/tag_meta.asp"
    , "name": "http://www.w3schools.com/jsref/prop_meta_name.asp"
    , "onclick=": "http://www.w3schools.com/jsref/event_onclick.asp"
    , "onsubmit=": "http://www.w3schools.com/tags/ev_onsubmit.asp"
    , "port": "http://www.w3schools.com/jsref/prop_loc_port.asp"
    , "pow()": "http://www.w3schools.com/jsref/jsref_pow.asp"
    , "prompt()": "http://www.w3schools.com/jsref/met_win_prompt.asp"
    , "protocol": "http://www.w3schools.com/jsref/prop_loc_protocol.asp"
    , "random()": "http://www.w3schools.com/jsref/jsref_random.asp"
    , "replace()": "http://www.w3schools.com/jsref/jsref_replace.asp"
    , "round()": "http://www.w3schools.com/jsref/jsref_round.asp"
    , "setFullYear()": "http://www.w3schools.com/jsref/jsref_setfullyear.asp"
    , "split()": "http://www.w3schools.com/jsref/jsref_split.asp"
    , "sqrt()": "http://www.w3schools.com/jsref/jsref_sqrt.asp"
    , "src": "http://www.w3schools.com/jsref/prop_frame_src.asp"
    , "stroke()": "http://www.w3schools.com/tags/canvas_stroke.asp"
    , "strokeText()": "http://www.w3schools.com/tags/canvas_stroketext.asp"
    , "switch()": "http://www.w3schools.com/js/js_switch.asp"
    , "templates": "http://jinja.pocoo.org/docs/templates/"
    , "toLocaleString()": "http://www.w3schools.com/jsref/jsref_tolocalestring.asp"
    , "toUTCString()": "http://www.w3schools.com/jsref/jsref_toutcstring.asp"
    , "Web_Console": "https://developer.mozilla.org/en-US/docs/Tools/Web_Console"
    , "while loop": "http://www.w3schools.com/js/js_loop_while.asp"
    , "write()": "http://www.w3schools.com/jsref/met_doc_write.asp"
    , "writeln()": "http://www.w3schools.com/jsref/met_doc_writeln.asp"
  };




  return printObj(webdevObj);


}; // end of videoFunc()


//===========================================================================
