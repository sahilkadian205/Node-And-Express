//We have different environments like development, testing , production,etc.
//Based on environments we want to enable a certain functionality and disable that functionality on some different environment.
//eg-
//Morgan is used for logging http requests.We want this functionality to work on development environment only not on production environment.

const morgan = require('morgan');
const express = require('express');
const app = express();

//We can use process.env.NODE_ENV to access environment name. It's a standard to use NODE_ENV as environment variable for environment name.
//Or we can use app.get('env'); //this will return 'development' by default if NODE_ENV is not set.
//process.env.NODE_ENV return undefined if NODE_ENV is not set.


if(app.get('env') === 'development'){
    app.use(morgan('tiny'));             //If we set NODE_ENV variable to production then morgan functionality will not work.
    console.log('Morgan Enabled....');   //set NODE_ENV manually if not set by using set NODE_ENV = production command and don't forget to relaunch your IDE.
}

const port = process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send('Hey...');
});


app.listen(port,()=> console.log(`Listening to port ${port}`));
