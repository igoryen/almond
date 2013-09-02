
//module.exports = {
	exports.printButtons = function(obj){
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
		  //bag += '<button onclick="location.href=/{{lang}}' + obj[key] + '">' + key + '</button><br>';
		  bag += "<a href=/{{ lang }}/" + obj[key] + ">" + key + "</a><br>";
		}
		return bag;
	};
//};
