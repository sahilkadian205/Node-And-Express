//We use console.log() for debugging. When we are done with debugging we reomve console.log(). So writing and removing console.log() statements
//in our code again and again is very tedious task.
//We will use debug module and control the enabling and disabling of debugging with the help of environment variables so that we 
//don't have to write and remove console.log() statements in our code again and again.

//Use npm i debug to install debug module.

const express = require('express');
const app = express();

//require('debug') returns a function and we are calling that with ('app:startup')
//app:startup is a namespace (standard way to name it).
//create a env variable DEBUG and set its value as app:startup. If we clear this value or change it, debugging will be disabled.
const debug = require('debug')('app:startup');  

debug('Debugger is on.........');   // instead of console.log() we will use debug variable.

const port = process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send('Hey...');
});


app.listen(port,()=> console.log(`Listening to port ${port}`));