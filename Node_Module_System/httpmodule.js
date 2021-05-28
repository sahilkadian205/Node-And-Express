const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify(['Javascript','C++',]));
        res.end();
    }
});

//Here we have two routes 
// '/' and '/api/courses'
//In real world application we can have many routes. And writing this way will not be structurable and maintable.
//So we use express framework that is built on top of node's http module. Express gives structure to our code.

server.addListener('connection',(socket)=>{     //connection is a by default event name that occurs when http request is made.
    console.log('Connected.....');
});

server.listen(3000);

console.log('Listening on port 3000....');