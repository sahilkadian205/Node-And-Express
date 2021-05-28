//So far we have returned only json objects in response.
//What if we want to return html markup. So we use teamplating engines for that.
// We will use pug templating engine. Use npm i pug command to install pug.

const express = require('express');
const app = express();

const port = process.env.port || 3000;

//we need to set the view engine for the application. 
//Will use app.set() method which have following parameters - 
//First parameter is a property called 'view engine'
//Second parameter is name of templating engine. We will use 'pug'. Express will internally import this pug templating engine from 
//node_modules folder.


app.set('view engine','pug');

//Now create a folder views and in this we will create a .pug extension file in which we will write html like code but its html.
//See pugindex.pug file.We dont have opening and closing tags in pug file and we can set data dynamically.

//We have to set another property called 'views' and second parameter will be path of views folder in which pug (template) file is present.
app.set('views','./views');


app.get('/',(req,res)=>{
    res.render('pugindex',{pagetitle:'My Express App',message:'Hi I am Templating Engine'});
});
//pugindex - name of pug file,{pagetitle:'My Express App',message:'Hi I am Templating Engine'} this object will set values in pugindex file.

app.listen(port,()=>console.log(`Listening at port ${port}`));
