//Express is a lightweight open-source framework used for building web applications.
//Express gives a proper structure to our application.
//Express is built on top of http module.
//use npm i express to install express

//RESTFul web services
//REST - Representational State Transfer.
//Rest is basically a convention to build web services.

//We use http methods to create web services (CRUD operations)
//post - for creating data            C
//get - to read or fetch data         R
//put - to update data                U
//delete - to delete data             D

const express = require('express');  //express is a function
const app = express();  //this function returns an object
//we can use app object to use different methods (CRUD operations)
app.post()              //C
app.get()               //R
app.put()               //U
app.delete()            //D

