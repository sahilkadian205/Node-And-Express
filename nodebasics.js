//Node is a runtime environment for executing javascript code.
//Earlier we could execute javascript code on browsers only. Each browser has its own javascript engine.
//Ryan Dahl embedded google chrome v8 javascript engine inside C++ program and named it 'Node'.
//Node is not a programming language or a framework.

//Run using command node filename.js on terminal or cmd.
console.log('hello world');

//We don't have 'window' or 'document' object in node. It's available in runtime environment provided by browsers. In node we have 'global'.

//console.log(window);  //ReferenceError: window is not defined
console.log(global)

//We have functions available in 'global' object. We can call them with or without global object.
//global.setTimeout()  'or' setTimeout()
//global.clearTimeout() 'or' clearTimeout()
//global.setInterval()  'or' setInterval()
//global.clearInterval() 'or' clearInterval()

var x = 10;             //x will not be added to global object because its scope is limited to in this file only due to node's modular system.
console.log(global.x);  //If we run this in brower and log window.x then we will get 10. In node we will get undefined.

//It's good we don't have x in global object.
//In real life application we have lots of javascript files and we can have variables with same name in two or more files. Now,if this variable 
// x is global so it will get overrided by variable in other files which can cause problems in application.
//That's why we need modules. Node application follows modular approach.