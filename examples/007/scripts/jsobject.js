define(function() { // 1
  return { // 2
    getObject: function() { // 3
        
      var object = {
         "What is HTML great for?": "Declaring static documents"
        , "What when we try to use HTML for declaring dynamic views in web-applications?": " HTML falters." 
        , "Why does HTML falters? What are HTML's shortcomings?": "Its vocabulary isn't wide enough."
        , "How do I extend HTML vocabulary for my application?": "Use AngularJS."
        , "What is the resulting environment?":  "Extraordinarily expressive, readable, and quick to develop."
        , "How do other frameworks deal with HTML’s shortcomings?": "They do two things: <br> either abstract away HTML, CSS, and/or JavaScript <br>or they provide an imperative way for manipulating the DOM."
        , "What do you mean '<mark>abstract away</mark>'?": "…"
        , "What do you mean by '<mark>provide an imperative way for manipulating the DOM</mark>?": "…"
        , "What is HTML's root problem?": "HTML was not designed for dynamic views."
        , "Which of these ways address the HTML's root problem?": "Neither."
        , "What is AngularJS?": "It is a toolset."
        , "What is it for?": "For building the framework most suited to your application development."
        , "What is a <mark>framework</mark>?": "If I say you to cut a paper of dimension 5m by 5m then surely you would do that. But then I ask you to cut 1000 papers of the same dimension. Then you won't do the measuring 1000 times, obviously you would make a frame of 5m by 5m and then with the help of it you would be able to cut 1000 papers in less time. So, what you did is you made a framewok which would do that type of task. So, instead of performing the same type of task again and again for the same type of applications, what you do is you create a framework having all those facilities together in one nice packet and hence providing the abstraction for your application and more importantly many applications."
        , "What does 'extensible' mean?": "…"
        , "Is AngularJS extensible?": "Fully."
        , "Does AngularJS work well with other libraries?": "Yes"
        , "Can I modify or replace any feature in AngularJS to suit my unique development workflow and feature needs.?": "Yes, every feature." 
        , "What is <mark>data-binding</mark>?": "It is an automatic way of updating the view whenever the model changes and vice versa (as well as updating the model whenever the view changes)."
        , "Is data-binding good or bad?": "It is awesome!"
        , "Why is data-binding awesome?":  "Because it eliminates DOM manipulation from the list of things you have to worry about."
        , "What controls the behaviour behind the DOM elements?": "Controllers." 
        , "How does AngularJS let me express the behavior?": "In a clean readable form without the usual boilerplate."
        , "What do you mean by the '<mark>usual boilerplate</mark>'?": "Updating the DOM, registering callbacks or watching model changes."
        , "How is AngularJS framework different from other frameworks?": "There is no need to inherit from proprietary types; to wrap the model in accessors methods."
        , "Explain wrapping a model in accessors methods.": "?"
        , "What does AngularJS use?": "Just plain old JavaScript." 
        , "How does this help me?": "This makes your code easy to test, maintain, reuse, and again free from boilerplate."
        , "What is <mark>deep linking</mark>?": "In the context of the World Wide Web, deep linking consists of using a hyperlink that links to a specific, generally searchable or indexed, piece of web content on a website (i.e. http://example.com/path/page), rather than the home page (i.e. http://example.com/)."
        , "What does a deep link reflect?": "Where the user is in the app."
        , "How is this useful?": "Users can bookmark and email links to locations within apps." 
        , "What are round trip apps?": "…"
        , "What is <mark>AJAX</mark>?": "Ajax is a way of developing Web applications that combines:<ol><li>XHTML and CSS standards based presentation</li><li>Interaction with the page through the DOM</li><li>Data interchange with XML and XSLT</li><li>Asynchronous data retrieval with XMLHttpRequest</li><li>JavaScript to tie it all together.</li></ol>"
        , "What are AJAX apps?": "…"
        , "How do round trip apps get this?": "Automatically."
        , "But how do AJAX apps get this?": "They do not, by their nature." 
        , "What are the benefits of deep link?": "?"
        , "What is desk-top app behaviour?": "?"
        , "What does AngularJS do with these things?": "AngularJS combines the benefits of the two."
        , "What is an important part of great user experience?": "Client-side form validation."
        , "Do I  have to write JavaScript code for client-sore form validation?": "No."
        , "What does AngularJS let me do?": "It lets you declare the validation rules of the form without having to write JavaScript code." 
        , "What is XHR?": "?"
        , "What does AngularJS do in regard to XHR?": "It provides services on top of XHR."
        , "What do the services do?": "They dramatically simplify your code."
        , "What do you do with XHR?": "We wrap XHR."
        , "What does it give me?": "Exception management and promises."
        , "What do you mean by 'promises'?": "?" 
        , "What do promises do?": "They further simplify your code." 
        , "How do promises simplify my code?": "By handling asynchronous return of data."
        , "What does that let me do?": "This lets you assign properties synchronously when the return is actually asynchronous."
        , "What are Directives?": "?" 
        , "Are directives available in other frameworks?": "No, this unique and powerful feature is available only in Angular."
        , "What do Directives let me do?": "Invent new HTML syntax, specific to your application."
        , "What do you use directives to do?": "To create reusable components."
        , "What are components?": "?"
        , "What does a component allow me to do": "Hide complex DOM structure, CSS, and behavior."
        , "How is that beneficial to me?": "This lets you focus either on what the application does or how the application looks separately."
        , "What is another important part of serious apps?": "Localization."
        , "What does Angular have to do localization?": "Locale aware filters and stemming directives."
        , "What do Locale aware filters and stemming directives give me?": "Building blocks to make your application available in all locales."
        , "Does AngularJS work with other technologies?": "Yes."
        , "Can I add Angular to my existing page?": "Yes."
        , "How much AngularJS can I add?": "Add as much or as little of AngularJS to an existing page as you like."
        , "How is AngularJS different from other frameworks in this respect?": "Many other frameworks require full commitment."
        , "What is an <mark>iframe</mark>?": "An inline frame that is used to display a web page within a web page."
        , "What are the iframes for?": "To make it so multiple apps can run on a single page." 
        , "Do I need to use iframes to embed multiple AngularJS applications in a page?": "No."
        , "Why not?": "Because AngularJS has no global state." 
        , "I don't understand.": "?"
        , "What do I do to declaratively describe how my application is wired?": "Use dependency injection in AngularJS."
        , "What does this mean?": "This means that your application needs no main() method which is usually an unmaintainable mess."
        , "What is another reason for using dependency injection?": "It's also a core to AngularJS." 
        , "What does this mean?": "This means that any component which does not fit your needs can easily be replaced."
        , "Is AngularJS good and testable?": "It was designed from ground up to be testable."
        , "What does Angular encourage?": "behavior-view separation, it comes pre-bundled with mocks, and takes full advantage of dependency injection. It also comes with end-to-end scenario runner which eliminates test flakiness by understanding the inner workings of AngularJS."
      }; // end object
      return object;
    } // end getObject
  } // end return
}); // end define

//window.onload = func;

/*
require(['printobject'], function (printobject) { 
  var bag;
  bag = printobject(object);
  document.getElementById('a').innerHTML = bag;
*/



