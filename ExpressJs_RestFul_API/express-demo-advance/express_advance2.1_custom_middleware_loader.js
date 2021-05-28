const express = require('express');
const app = express();
const logger = require('./express_advance2.1_custom_middleware_loggermiddlewarefucntion');

const port = process.env.port || 3000;


app.use(logger);

app.get('/',(req,res)=>{
    res.send('Hi....');
});

app.listen(port,()=>console.log(`Listening at port ${port}`));