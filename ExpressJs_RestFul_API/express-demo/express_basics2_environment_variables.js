//Environment Variables

//In express_basics1.js we have hard coded the port number. But when we deploy this application on production server, the port number that 
//we hard coded maybe not availabe on production machine.
//So, we need to set the port number dynamically.
//We will use environment variable to assign port number (we use path environment variable to set java path).

//But before using environment variable we need to create it.
//On windows goto cmd and type
//set variablename=value
//eg set port = 5000
//If this doesn't work then add environment variable manually

//On mac goto terminal and type
//export variablename=value

//Close and start the IDE (vscode or whatever you using)
//now we will use process object to get the environment variable value.


const express = require('express');
const app = express();

const port = process.env.PORT || 3000;   //if port value is not availabe then we will use 3000 by default.

app.get('/',(req,res)=>{
   res.send('Hello, I am rest API....') 
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,4,5]);
});

app.listen(port,()=>console.log(`Listening on port ${port}....`));

