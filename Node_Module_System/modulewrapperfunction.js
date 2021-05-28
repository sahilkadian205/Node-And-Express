//Every module or js file in node is wrapped inside a function which looks like below -

// (function(exports,require,module,__filename,__dirname){

     //code inside module or js file....

// })


// This function is known as module wrapper function.
//So, 'module' is not a global object. It is a local object present in every module.Similarly, __filename, __dirname are local variables.

console.log(typeof exports, exports);
console.log(typeof require, require);
console.log(typeof module, module);
console.log(typeof __filename, __filename);
console.log(typeof __dirname, __dirname);