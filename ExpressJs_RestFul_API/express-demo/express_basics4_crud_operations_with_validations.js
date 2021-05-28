const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const courses = [
    {id : 1, course:'course1'},
    {id : 2, course:'course2'},
    {id : 3, course:'course3'}
];

//get request

app.get('/',(req,res)=>{
   res.send('Hello, I am rest API....') 
});

app.get('/api/courses',(req,res)=>{    //this route will be used to get all courses
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{   //this route will fetch specific course based on course id that we pass in route parameter
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) 
        return res.status(404).send('Course with given Id not found');  //It is standard error code 404 - resource not found in RestFul API's.

    res.send(course);
});


//post request 

//we will use postman for creating post request.Will send data in json format.Check help.txt file for more info.

/* app.post('/api/courses',(req,res)=>{     //commented post request because validation is missing.post request with validation check below
    const course = {
        id : courses.length + 1,
        name : req.body.name         //Now in order for req.body.name to work we need to enable json parsing.It's disabled by default in express.
    };                               //See in top of this file - app.use(express.json());
    courses.push(course);
    res.send(course);               //By convention we should return the posted (newly created) object back to client in response.
}); */

//We should always validate input. Validation is important so that we don't post or update wrong data in our system. So our first step
//should be validating data before processing it.We will rewrite the above post request with validation code.So commenting above code.

/* app.post('/api/courses',(req,res)=>{
    if(!req.body.name){
        res.status(400).send('Name property is missing');          //By convention we send error code 400 - bad request (invalid input data)
        return;
    }
    else if(req.body.name.length < 3){
        res.status(400).send('Name length is less than 3');
        return;
    }
    //and so on....
    //this code looks ugly with if-else blocks.
    //We can use Joi package for validation and will provide structure to our code.It will create a error message based on wrong input.
    //use npm i joi to install joi module.
    //Commenting this post request.Will use below post request which will have validation using Joi.
}); */

//using Joi first we need to create a schema.Schema is an object only. Schema tells what properties we have in object.We define what type 
//of values a property can hold,max and min length and so on.We can use regex as well.

app.post('/api/courses',(req,res)=>{      //for this request we will send json in request body which contains name property
    const schema = {
        name : Joi.string().min(3).required().regex(/^[a-zA-Z\s]*$/)    //in json that we send, the property should be "name" eg- {"name":"yoyo"}
    };

    //Note - Use joi@13.1.0 else validation method will not work.
    const result = Joi.validate(req.body,schema);   //result is a object.This object will have error value as null if validation passes and
                                                    //if validation fails error property will have some value
    if(result.error)
        return res.status(400).send(result.error.details[0].message);          //By convention we send error code 400 - bad request (invalid input data)
        
    const course = {
        id : courses.length + 1,
        course : req.body.name       //Now in order for req.body.name to work we need to enable json parsing.It's disabled by default in express.
    };                               //See in top of this file - app.use(express.json());
    courses.push(course);
    res.send(course);               //By convention we should return the posted (newly created) object back to client in response.
});

//put request

//let's create a validation function first which can be called for validation.

function validateCourse(course){
    const schema = {
        name : Joi.string().min(3).required().regex(/^[a-zA-Z\s]*$/)
    }
    return Joi.validate(course,schema);
}

app.put('/api/courses/:id',(req,res)=>{    //for this request will send course id in route parameter and request json which contains name property
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
        return res.status(404).send('Course with given Id not found');  //It is standard error code 404 - resource not found in RestFul API's.
        
    const {error} = validateCourse(req.body);    //{error} - this is object destructing concept
    if(error)
        return res.status(400).send(error.details[0].message);   //By convention we send error code 400 - bad request (invalid input data)

    course.course = req.body.name;
    res.send(course);
});

//delete request 

app.delete('/api/courses/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
        return res.status(404).send('Course with given Id not found');  //It is standard error code 404 - resource not found in RestFul API's.
        
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});



app.listen(port,()=>console.log(`Listening on port ${port}....`));