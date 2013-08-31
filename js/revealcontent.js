// When and only when the entire document has loaded
  window.onload = function() {
  // Find all container elements (like <div>) with class="reveal"
    var elements = document.getElementsByClassName("reveal");

    for(var i = 0; i < elements.length; i++) { // For each one container element...

      var elt = elements[i];

      // Find the "handle" element with the container
      var title = elt.getElementsByClassName("handle")[0];

      // When that element is clicked, reveal the rest of the content
      title.onclick = function() {

        if (elt.className == "reveal") 
          elt.className = "revealed";

        else if (elt.className == "revealed") 
          elt.className = "reveal";
      } // end of onclick
    } // end of for
  };