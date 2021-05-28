const path = require('path');
const os = require('os');
const file = require('fs');
const EventEmitter = require('events');  //EventEmitter is a class that's why pascal notation is used.

const pathObj = path.parse(__filename);
console.log(pathObj);

console.log(os.hostname());
console.log(os.freemem());

const files = file.readdirSync('./')    //Synchronous Method
console.log(files);

file.readdir('./',function(err,files){   //Asynchronous Method
    if(err) console.log('Error : ',err);
    else console.log(files);
});


const emitter = new EventEmitter();
//Register Event
emitter.addListener('messagelogged',(arg)=>{
    console.log('Event Occured',arg);
});

//Emit or producing event - Making noise that something happened.
emitter.emit('messagelogged',{id:1,url:'http://'});