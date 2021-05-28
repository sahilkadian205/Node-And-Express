const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
   res.send('Hello, I am rest API....') 
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,4,5]);
});

//Route Parameters - are essential or required values (like customer id,etc)

//Now we want to read a parameter which is passed in an url. This parameter is termed as route parameter.
//We use :routeparametername in url. You can give any name id,courseid,etc.
app.get('/api/courses/:id',(req,res)=>{   //here id is our route parameter
    res.send(req.params.id);              //we use req.params.routeparameter to access route parameter
});


//we can have multiple route parameters
app.get('/api/courses/:year/:month',(req,res)=>{   
    res.send(req.params);  
    //to access year req.params.year
    //to access month req.params.month
});

//Query String Parameters - are used to provide additional data for backend (like sorting logic)
//We define query parameters using ?key=value
//e.g- http://localhost:5000/api/courses/2018/1?sortBy=name

app.get('/api/courses/:year/:month',(req,res)=>{   
    res.send(req.query);            //use req.query to get query string parameter object
});   //comment line 24-28 to see output (multiple parameters code)


app.listen(port,()=>console.log(`Listening on port ${port}....`));

