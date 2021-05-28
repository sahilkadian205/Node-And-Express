// I have installed underscore module using npm i underscore. Check in package.json in dependencies property.This pacakge will be stored 
//in node_modules folder.
const _ = require('underscore');

//Require resolves a module in following way - 
//e.g- require('underscore');
//First require assumes that underscore is a built in module.
//If not then it assumes that this module is present in current folder.
//If not then it checks in node_modules folder.

console.log(_.isNull(null));

//Now lets install mongoose package using npm i mongoose