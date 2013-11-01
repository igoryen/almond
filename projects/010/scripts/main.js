//alert("Hello!");
require.config({ // 2
    paths: {
        "jquery": '../../../lib/jquery-1.10.1' // 4
    }
});
require(["jquery", "message", "module2"], function($, message, module2){ // 9, 13, 14, 15, 16
  $('#output1').html('Hello World - this is my first module!'); // 30
  $('#output2').html(message); // 40
  $('#output3').html(module2); // 40


});

