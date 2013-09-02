// console.log('before the first require()');
// var middleware = require("./middleware");
// console.log('the type is: ' + typeof middleware.printButtons); // success!

// console.log('post the require()');


var buttons = {

 "Funny":"funny"
 , "Git": "git"
 , "Gregoriana":"gregoriana"
 , "Health":"health"
 , "HTML5":"html5"
 , "IT stuff":"itstuff"
 , "IT terms":"itterms"
 , "Java":"java"
 , "JavaScript":"javascript"
 , "Job Search" : "jobsearch"
 , "Lingua":"lingua"
 , "Localization":"localization"
 , "Mozilla" : "mozilla"
 , "Mozilla bugs" : "mozillabugs" 
 , "Music":"music"
 , "Node.js":"nodejs"
 , "PHP":"php"
 , "Preach & Teach":"preachandteach"
 , "Praise & Worship":"praiseandworship"
 , "Self-Defense":"selfdefense"
 , "Seneca":"seneca"
 , "Tolkieniana":"tolkieniana"
 , "Transifex" : "transifex"
 , "Uncategorized":"uncategorized"
 , "Video":"video"
 , "Webdev":"webdev"
};


function printButtons(obj){
	var keys = [];
	var key,f;
	var bag = "";

	for (var key in obj){
	  if (obj.hasOwnProperty(key)){
	    keys.push(key);
	  }
	}
	keys.sort();


	for (f = 0; f < keys.length; f++){ 
	  key = keys[f];
	  //bag += '<button onclick="location.href=/' + obj[key] + '">' + key + '</button><br>';
	  //bag += "<a href=/{{ lang }}/" + obj[key] + ">" + key + "</a><br>";
	  bag += "<a href=/" + obj[key] + ">" + key + "</a><br>";

	  //document.write("<a href=/{{ lang }}/" + obj[key] + ">" + key + "</a><br>");
	}
	return bag;
};

 var element = document.getElementById('navigation_pane'); // find HTML element
 element.innerHTML = printButtons(buttons); // fill the HTML element

//printButtons(buttons);

