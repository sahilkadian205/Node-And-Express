const express = require('express');
const app = express();

//app.get('url',callbackfunction)   //this callback function is also called route handler

app.get('/',(req,res)=>{
   res.send('Hello, I am rest API');
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,4]);
});

//Now look at our code. Using express our code is structured and looks nice. There are no if blocks that we saw when we were using 
//http module.
//As our application grows we can move related routes in one file. Using express we can do that. So, epxress provides a skeleton or structure
//to our application.

app.listen(3000,()=>console.log('Listening on port 3000....'));

//If we make some changes then we have to restart our application again and again (by pressing ctrl+c) to reflect the changes.
//So to get rid of that we will use 'nodemon' (node monitor)

//install nodemon using npm i -g nodemon (to install globally)
//Now instead of running application using node filename use nodemon filename
//Just refresh the page you will get the changes

// If you get error using nodemon filename command do the below - 
// Open PowerShell (Run As Administrator)
// Check the current execution policy using this command
//     Get-ExecutionPolicy
//     # You should get 'Restricted'
// Run this command to make it 'Unrestricted'
//     Set-ExecutionPolicy Unrestricted
// Check again whether execution policy changed by running this command
//     Get-ExecutionPolicy
//     # You should get 'Unrestricted'
// Now try to run nodemon on your project
//     nodemon 'filename.js'