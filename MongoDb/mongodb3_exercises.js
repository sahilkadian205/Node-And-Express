//Now let's do some exercise.
//We have a exercise-data.json file in which we have some data.
//We will import this data into mongodb.
//But first check you have mongoimport or not.On cmd type mongoimport and if you get any error do below or check help.txt- 
// download mongoimport from below link -
// https://www.mongodb.com/try/download/database-tools 
// export mongoimport.exe and paste this .exe file at "C:\Program Files\MongoDB\Server\4.4\bin"

//Now, first change directory where exercise-data.json file is present then run below command -

//mongoimport --db mongo-exercises --collection courses --file exercise-data.json --jsonArray
//--jsonArray flag is used because our data (in exercise-data.json file) is array of json objects
//it will create database mongo-exercises with collection courses and create documents from data present in exercise-data.json file automatically.

//Now let's connect to this database and do some exercises.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
        .then(()=>console.log('Connected to mongoDb.....'))
        .catch(()=>console.log('Failed to connect to mongoDb...'));


const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : Date,
    isPublished : Boolean,
    price : Number
});
        
const Course = mongoose.model('Course',courseSchema);

//Exercise 1-
//Fetch all published backend courses,
//sort them by their name,
//pick only their name and author and display them

async function getExercise1(){
    const result = await Course
                        .find({isPublished:true,tags:'backend'})
                        .sort({name:1})
                        .select({name:1,author:1});
                        
    console.log('Exercise 1 result is:',result);
}

getExercise1();

//Exercise 2-
//Fetch all published frontend and backend courses,
//sort them by their price in descending order,
//pick only their name, author and price and display them

async function getExercise2(){
    const result = await Course
                        .find({isPublished:true,tags:{$in:['frontend','backend']}})
                        .sort({price:-1})   //or .sort('-price') '-price' for desc and 'price' for asc
                        .select({name:1,author:1,price:1});    //or select('name author price')
                        
    console.log('Exercise 2 result is:',result);
}

getExercise2();

//Exercise 3-
//Fetch all published courses that having price more than or equal to 15
//or have word 'by' in their title
//pick only their name ,author and price and display them

async function getExercise3(){
    const result = await Course
                        .find({isPublished:true})
                        .or([{price:{$gte:15}},{name:/.*by.*/i}])
                        .select('name author price')
                                         
    console.log('Exercise 3 result is:',result);
}

getExercise3();