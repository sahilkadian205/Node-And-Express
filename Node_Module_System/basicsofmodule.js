// Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the 
// Node.js application.
// Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed
// in a separate .js file under a separate folder.
//Every file in node application is considered as module.
//Varibales and functions defined in js file(module) are private. To access them from outside file we have to export them to make them public
//and import in file where we want to use them.

//We have object called 'module' which will be used to export variables or functions in a module.
console.log(module);

//In module object we have 'exports' object which will store the exports in key value pair.

//require('module path') method returns the exports object.

//We can also use export and import to export or load a module if we haven't used exports.

//We can't load module using both import and require.