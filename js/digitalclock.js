// Define a function to display the current time
//var aux = require('aux'); // error: require not defined

  function displayTime() {
  	

    var elt = document.getElementById("clock"); // Find element with id="clock"
    var now = new Date(); // Get current time
    elt.innerHTML = now.toLocaleTimeString(); // Make elt display it
    setTimeout(displayTime, 1000); // Run again in 1 second

      	//console.log(typeof aux.printButtons);

  }
  window.onload = displayTime; // Start displaying the time when document loads.