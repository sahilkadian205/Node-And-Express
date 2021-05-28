//We store configurations of a environment in configuration file.
//To read these configurations we have different modules available.
//We will use config module.Use npm i config to install config module.
//Create a folder config and create configurations file (json files) in it.Keep in mind filename should be same.
//default.josn - for default configurations
//development.json - for developement configurations
//production.json - for production configurations

//We never store passwords in config files. We store passwords in environment variables and then read these env variable value in config file. 
//We use appname_password naming convention to set password environment variable name.
//eg set facebook_password = 12346

//To access these environment variables in configuration file -
//we create file custom-environment-variables.json (keep in mind file name should be exactly same) in config folder and set 
//password property using environment variable name.

//I have created a environment variable 'expressjsapp_password' and used in custom-environment-variables.json file.

const config = require('config');
const express = require('express');
const app = express();

const port = process.env.port || 3000;

// config.get('key')  get method returns value of key passed
console.log('App Name:', config.get('name'));           //Set environment variable NODE_ENV to development or production and see output.
console.log('Mail Server:', config.get('mail.host'));
console.log('Password:', config.get('mail.applicationpassword'));

app.get('/',(req,res)=>{
    res.send('Hey...');
});


app.listen(port,()=> console.log(`Listening to port ${port}....`));
