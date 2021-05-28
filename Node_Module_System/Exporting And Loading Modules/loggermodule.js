var url = 'www.google.com';
var port = 8080;

function logMessage(message){
    console.log('The message is : '+message);
}

module.exports.link = url;
exports.logMessage = logMessage;  //call exports directly  

//module.exports.link = url;
//exports.logLowerCase = logLowerCase; 
//Let's understand this syntax

const obj = {};

const display = function(){
    console.log('yo');
}

//Adding properties to an object
obj.id = 28;                  //object.property = value;
obj.displayMessage = display; //object.property = value;

//Similarly
//exports.someProperty = 'some value';   //object -> exports, property -> somePropery, value -> 'some value'
