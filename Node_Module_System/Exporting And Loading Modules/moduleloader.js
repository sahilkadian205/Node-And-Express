const log = require('./loggermodule');   //Use require method to get the exports object.log will recieve the exports object.
const greet = require('./greetingmodule');

console.log(log.link);
log.logMessage('I am Module Loader');

greet('Sahil');
