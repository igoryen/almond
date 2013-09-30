function moveon() {

  // Display a modal dialog with button 'OK' to ask the user a question
  var answer = confirm("Ready to move on?");
  
  // If the "OK button" was clicked, make the browser load a new page
  if (answer) {
  	window.location = "http://google.com";
  }
}
// par 1: function to run; 
// par 2: milliseconds after which to run par 1.
setTimeout(moveon, 3000);