//MongoDb is a NoSQL which is different from traditional databases.
//It is different from traditional databses as it doesn't have any schema.
//Data is stored and fetched in json object.

//Let's understand what does databse,collection and documents means in mongoDb or NOSQL db.
//Database - is a collection of tables in relational database. In terms of nosql database is a collection of 'collection'.

//Collection - is a collection of documents. Consider it as a table just like we have in relational databases.
//We always use plural name for a collection.

//Document - is like a record or row that we have in a relational database tables.Document is a json object.So, it can hold complex objects.
//As document is a json object so we store data in key value pairs.Documents can hold arrays or complex objects.So, that's why we don't
//have any schema in NOSql. In relational databases on column can have atomic values we can't use arrays here so that' why we have create
//a child table and requires proper schema to define for both parent and child table.

//If you face any difficulty check help.txt file.

//Let's install mongoose using npm i mongoose command.

//Now let's connect to mongodb.

const mongoose = require('mongoose');

//connect() method takes a string which is path or link where our mongodb server is present.connect() returns a promise so we can use
//then() when promise is resolved and catch() if some error occurs.

mongoose.connect('mongodb://localhost:27017/playground')
        .then(()=>console.log('Connected to mongodb..........'))
        .catch(()=>console.log('Not able to connect mongodb........',err));

//playground is name of our database. You can create this database manually along with a collection. But, it can be created automatically 
//if not present, only when you have written some code that will create a document in this database and for that you have to create a
//colection first.Only then playground database will be created.Please keep this in mind it's very important.

//Now, have to define a schema for our document.Schema defines the shape of a document in a collection.
//Schema will tell the properties and type of values that property can hold in a document.Schema is just for mongoose not mongodb.
//We have following schema types - 
// 1)String                            5)Boolean
// 2)Number                            6)ObjectID - for assigning unique identifiers
// 3)Date                              7)Array
// 4)Buffer - for storing binary data

const courseSchema = new mongoose.Schema({           //new will create this courseSchema object with properties and type of values defined.
    name : String,
    author : String,
    tags : [String],
    date : {type : Date, default : Date.now},
    isPublished : Boolean,
    price : Number
});

//So we know what a class and object means. Human is a class and John is an object.
//Now we want to create a class Course and then we will create objects like nodeCourse,javaCourse,etc.
//In order to create a class Course we have to compile the above schema into a model.
//We will use model() whose first parameter is singular name of the collection we want to create.But collection name is always plural.
//So, this singular name will be converted to a plural name if you check in mongodb.
//Second parameter is the schema object we want to create for our document.
//model() function will return a class.

const Course = mongoose.model('Course',courseSchema);   //In mongodb collection name will be courses not course.

//Now we have our Class created. Let's create object which can also be called a document and save it.

const course = new Course({
    name : 'React Js',
    author : 'Mosh',
    tags : ['node','frontend'],
    isPublished : true,
    price : 10
});

//This course object will have a save() method which will be used to save this object or we can say document.
//save() method return promise so we can await it. Also, we have learned that await code should be written in a function prefixed with
//async keyword.Let's create a async function createCourse() and call it.

async function createCourse(){
    const result = await course.save();
    console.log('Course created:',result);
}

createCourse();

//At this point playground database will be created automatically if not present earlier. We will have a database playground created with
//a collection called courses (collection are always plural) with a document.
//Change values in cuourse object to create more courses documents.