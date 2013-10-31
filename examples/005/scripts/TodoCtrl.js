//TodoCtrl.js

function TodoCtrl($scope) { // 1
  $scope.todos = [{    // 2
    text: 'learn angular', // 3
    done: true // strikethrough
  }, {
    text: 'build an angular app',
    done: false // no strikethrough
  }];

  $scope.addTodo = function () { // 4
    $scope.todos.push({   // 5
        text: $scope.todoText, // 6
        done: false
    });
    $scope.todoText = ''; // 7
  };

  $scope.remaining = function () { //8
    var count = 0;
    angular.forEach($scope.todos, function (todo) { // 9
        count += todo.done ? 0 : 1; // 10
    });
    return count;
  };

  $scope.archive = function () { // 11
    var oldTodos = $scope.todos; // 12

          //=================================================
            var bag = "";
            var box = "";

            box += "oldTodos.length: "+ oldTodos.length + "<br><br>";

            for (var object = 0; object < oldTodos.length; object++) { // for loop is for array
              var arrayOfProps = [];
              var currentProp = "";
              var objKeysCount = 0;


              for (var prop in oldTodos[object]) { // for/in loop is for an object
                //box += "oldTotos[object].length: " + oldTodos[object].length + "<br>"; // ==> undefined
                box += "prop: " + prop + "<br>";
                if (oldTodos[object].hasOwnProperty(prop)) {
                  bag += prop + ": " + (oldTodos[object]).prop + "<br>"; // trying to log out the object.prop.value


                  // for( var pr in oldTodos[object]){
                  //   bag += "oldTodos[object.pr]: " + oldTodos[object.pr] + "<br>";
                  // }

                  //--------------------------
                  objKeysCount ++;
                  //box += "object does have a property<br>";
                  /*
                  bag += "objKeysCount: " + objKeysCount + "<br>";
                  bag += "text: <mark>" + oldTodos[object].text + "</mark><br>";
                  bag += "done: <mark>" + oldTodos[object].done + "</mark><br>";
                  //--------------------------
                  */









                  /*

                  arrayOfProps.push(prop); 

                  //-------------------------------
                  box += "arrayOfProps.length: " + arrayOfProps.length + "<br><br>";
                  //--------------------------------
                  */




                }
              }
              /*
              //box += "objKeysCount: " + objKeysCount + "<br><br>";
              for (var i = 0; i < arrayOfProps.length; i++) {
                currentProp = arrayOfProps[i];
                //---------------------------
                box += "currentProp: " + currentProp + "<br>"; // a) text, b) done
                bag += currentProp + ": " + arrayOfProps[currentProp.text] + "<br>";
                //---------------------------
              }
              //-------------------
              bag += "<br>";
              //--------------------
              */
            }

            document.getElementById('bag').innerHTML = "<pre>" + bag + "</pre>";
            document.getElementById('box').innerHTML = "<pre>" + box + "</pre>";

          //===========================================
    $scope.todos = [];  // 13
    angular.forEach(oldTodos, function (todo) { //14
        if (!todo.done) $scope.todos.push(todo); //15
    });
  };
}

/*
1) $scope - defined here - encompasses the whole scope in the HTML doc
    in other words, $scope brings ng-vars from index.html into TodoCtrl.js
2) todos - is an array[] of the 2 objects{} currently defined in index.html - in ng-repeat
3) text: and done: - properties of each object 
    <span class="done-{{todo.done}}">{{todo.text}}</span>
    a) in class="done-{{todo.done}}" - the value of todo.done is 'true' or 'false'
    depending on the situation - if the value is 'true' the css class='done-true' will kick in
    b) {{todo.text}} - the value of todo.text is...
4) making of the function addTodo()
5) add to the todos array
6) 'text' will come from user input in the <form>
7) set text to null if no user input in the <form>
8) making the function remaining()
9) for each element in angular, (...) the todos array (...) run the anonymous function
10) incrementing 'count': if todo.done = 'true' add '0' to 'count'; otherwise add '1' 
11) making of the archive function. It will store away (i.e. archive) the todo objects whose 'done' property's value is true 
12) make a backup copy of the todos array and place them into 'objects'
13) make todos an array
14) for each item in the todos array, run the anonymous function
15) if object todo's property done's value is !true (i.e. not done yet), then add that 'todo' object to array of objects 'todos'
*/
