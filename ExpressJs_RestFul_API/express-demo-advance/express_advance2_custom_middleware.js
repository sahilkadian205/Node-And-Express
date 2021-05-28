const express = require('express');
const app = express();

const port = process.env.port || 3000;

//Let's create custom middleware

app.use(function(req,res,next){       //function(req,res,next)  is a middleware function.
    console.log('Logging...');
    next();                //we have to call next to pass control to next middleware function.If we don't use this request will get hanged.
});

app.use(function(req,res,next){       //function(req,res,next)  is a middleware function.
    console.log('Authetication...');
    next();                //we have to call next to pass control to next middleware function.If we don't use this request will get hanged.
});

app.get('/',(req,res)=>{
    res.send('Hi....');
});

//Middleware functions are called in sequence in which they are declared logging... -> authentication... ->route handler

//Let's create custom middleware function in other module (to keep code clean and maintainable) and import it.
//See files - express_advance2.1_custom_middleware_loader.js and express_advance2.1_custom_middleware_loggermiddlewarefucntion.js

app.listen(port,()=>console.log(`Listening at port ${port}`));