//Let's install morgan (third party middleware) using npm i morgan
//morgan is used for logging http requests

const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('tiny'));     //tiny is a format in which logs print. we can use other formats as well. See documentation on npmjs.com.

const port = process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send('Hey...');
});

//You will see in console- GET / 200 6 - 4.555 ms

//Use middleware function only when required else it will impact performance.

app.listen(port,()=> console.log(`Listening to port ${port}`));