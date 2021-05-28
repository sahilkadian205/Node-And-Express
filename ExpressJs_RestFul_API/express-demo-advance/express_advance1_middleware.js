//Middleware
//Whenever we raise a request it is passes through a request processing pipeline which contains some functions. Now these function can do two things 
//1) to pass control to next  function present in this pipeline or  
//2) to complete the request response cycle by sending reponse back to user.
//These functions in this pipeline is called middleware.
//Middleware function is a funtion that takes request object which returns either a response back to client or passes control to other 
//middleware function.

const { json, Router, response } = require('express');
const express = require('express');
const app = express();

//eg-
//route handler in get,put,post and delete method e.g - app.get('/',route handler function)
(req,res)=>{
    res.send('Hi I am route handler...');
}

//route handler function takes req object and send response back to client and terminates request response cycle.

//e.g-
app.use(express.json());
//express.json() returns a middleware function that reads the request and if there is json object present in body of request then it parses 
//into a json object and set req.body = object; (object is created by parsing request body)


//         request processing pipeline
//         -------------------------
//         |                       |
// request ->  json()  -> route()  -> response
//         |                       |
//         -------------------------
//   json() and route() are middleware functions

//Express includes few middleware functions.
//We can create our own middleware functions which we can put in front of request processing pipeline.So every request we receive will
//go through our middleware function.
//We can do authentication, authorization, logging, etc using middleware functions.
//Express application is a bunch of middleware functions.
//we use app (object returned by express()) 'use()' method to add a middleware - app.use(middlewarefunction).

//Always remember the order of using middleware function is important. Use them before our route handlers.If you use middleware functions
//after route handler then it will not be executed as route handler will end the request response cycle by sending response to client.