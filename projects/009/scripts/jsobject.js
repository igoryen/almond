define(function() { // 1
  return { // 2
    getObject: function() { // 3
        
      var object = {
          "What does firebase let me do?": "These things: <ol><li>Share and collaborate in real-time with your friends.</li><li>They want a responsive UI even when the network is slow or gone.</li><li>They want to move seamlessly from device to device.</li></ol>"
        , "What makes these all possible?": "The backend"
        , "What is the <mark>backend</mark>?": "Generally speaking, the <mark>back end</mark> is the code supporting the front end (responsible for database access, business logic etc)."
        , "What is the  <mark>front end</mark>?": "The user interface."
        , "What is the model of traditional backends?": "The <i>request / response</i> model."
        , "What does Firebase do with this model?": "Firebase replaces it with a new approach."
        , "What is this new approach based on?": "<i>Data synchronization</i>."
        , "What can Firebase apps do?": "They can do … things: <ol><li>Be written entirely with client-side code, </li><li>update in real-time out-of-the-box, </li><li>scale automatically, and </li><li>provide strong data security.</li></ol>"
        , "How is data stored in Firebase?": "As standard JSON."
        , "What helps provide easy access to that data from any platform?": "The Firebase client libraries and REST API."
        , "What is an <mark>API</mark>?": "It's an abbreviation for an <mark>application programming interface</mark>. API is a particular set of rules ('code') and specifications that software programs can follow to communicate with each other. API serves as an interface between different software programs and facilitates their interaction, similar to the way the user interface facilitates interaction between humans and computers."
        , "What is a <mark>RESTful API</mark>?": "A 'REST API' is almost always just an <mark>HTTP API</mark> given a different (wrong) name to make it sound better."
        , "What does <mark>REST</mark> stand for?": "REST stands for <mark>Representational State Transfer</mark>. REST uses the four HTTP methods (<code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>) to execute different operations. This in contrast to SOAP for example, which creates new arbitrary commands (verbs) like <code>getAccounts()</code> or <code>applyDiscount()</code>."
        , "What happens if a device loses its network connection?": "Firebase continues to allow access to locally cached data and seamlessly resynchronizes changes with the cloud when the device comes back online."
        , "How is data moved around an app?": "Firebase takes a new approach to it."
        , "What is this new approach?": "Otkaz to a traditional request & response model."
        , "What does it do instead?": "It works by synchronizing data between devices."
        , "How does Firebase synchronize data between devices?": "Whenever your data changes, all clients are notified immediately."
        , "How quickly does it notify the clients?": "Within milliseconds." 
        , "Can new clients be immediately updated?": "Yes, because the synchronized data is also persisted."
        , "How do traditional applications treat security?": "They intermix security code with application code."
        , "How does Firebase treat security?": "As a first-class feature."
        , "How is it done?": "You define your security policies in one place using a flexible rules language, and Firebase ensures that they are consistently enforced across all parts of your application."
        , "What does this having all my security logic in one place allow for?": "It allows for easy auditing and helps you avoid security mistakes."
        , "What is <mark>scaling</mark>?":"?"
        , "How is the Firebase API built for?": "It's built from the ground up for performance and scale."
        , "What does Firebase do whenever my data changes?": "Firebase calculates the minimum set of updates required to keep all clients in sync."
        , "What are all Firebase API functions designed to do?": "To scale linearly with the size of the data being synchronized."
        ,  "Do I have to worry about scaling and operations?": "No, Firebase handles all of the scaling and operations for you."
        , "How will my app scale?": "From its first user to its first million without any code changes."
        , "How helpfull is Firebase?": "It can provide all of the data storage, control, and transmission needs of most apps."
        , "Do I need a server?": "In many cases, Firebase can completely replace your server and server-side code." 
        , "Does this mean I no longer need to build complicated backend software?": "Yes, you can instead focus on your application logic and your customers."

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



