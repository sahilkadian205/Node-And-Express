const morgan = require('morgan');
const courses = require('./routes/courses');
const home = require('./routes/home');
const logger = require('./middleware/logger');
const express = require('express');
const app = express();

app.use(express.json());
app.use(logger);

const port = process.env.PORT || 3000;

if(app.get('env') === 'developement'){
    app.use(morgan('tiny'));
    console.log('Morgan Enabled....');
}

app.use('/api/courses',courses);
app.use('/',home);

app.listen(port,()=>console.log(`Listening on port ${port}....`));

//Now look our code is shorter and well structured. This is the benefit of using express framework.
//One important thing - the order of using middleware function is important. Always use them before route handlers.Because if you use 
//middleware functions after route handler then it will not be executed as route handler will end the request response cycle by sending 
//response to the client.