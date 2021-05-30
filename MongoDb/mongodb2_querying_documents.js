//We have learned how to connect and create documents in mongodb.
//Let's see how to fetch these documents.
//Note - To see output clearly comment out other code

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
        .then(()=>console.log('Connected to mongodb..........'))
        .catch(()=>console.log('Not able to connect mongodb........',err));

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : {type : Date, default : Date.now},
    isPublished : Boolean,
    price : Number
});

const Course = mongoose.model('Course',courseSchema);

//We will use this class Course to fetch records using find() method which returns promise so we will await it inside an async function.

async function getCourses(){
    const result = await Course.find();          //find() will return all the documents present in the collection.
    console.log(result);
}

getCourses();

//we can pass filter to fetch documents in find() method and use chaining to sort or limit documents or select specific properties from document.

async function getCoursesFiltered(){
    const result  = await Course
                        .find({author : 'Mosh',isPublished : true})  //Will fetch documents with author = Mosh and isPublished = true
                        .limit(2)                                    //will fetch only first two documents
                        .sort({name : 1})                //Will sort on basis of name. 1 = ascending order, -1 = descending order.Can pass multiple properties.
                        .select({author : 1,name : 1});  //will fetch only author and name property from document.You can write any number here.We use 1 in general.
    console.log(result);
}

getCoursesFiltered();

//Comparison Operators
//Now lets see how to use comparison operators.In mongoose we have following comparison operators - 

//eq (equal)
//ne (not equal)
//gt (greater than)
//gte (greater than or equal to)
//lt (less than)
//lte (less than or equal to)
//in
//nin (not in)

//to use them we prefix them with $ so that js engine can know that it is a operator
//we pass them in a object with key value pair { $gt : 10}  as value to some property 
//eg - { price : {$gt : 10}}  //means documents with price property greater than 10

async function getCoursesOnBasisOfPrice(){
  const result =  await Course
                    //.find({price : 10})     //courses with price equal to 10
                    //.find({price : {$gte : 10} })  //courses with price greater than or equal to 10
                    //.find({price : {$gte : 10, $lt:20} })  //courses with price greater than or equal to 10 and less than 20
                    .find({price : {$in : [10,15,20]}})   //courses with price equal to 10 or 15 or 20
                    .select({price:1,name:1,author:1});

    console.log(result);                
}

getCoursesOnBasisOfPrice();

//Logical Operators
//or
//and

//We pass array of conditions in or() and and(). We will use find() without any filter and then use or() or and().
//Using multiple filters in find() is similar to using and() logical operator as each filter is used with 'and' operator. 

//Remember don't forget to write find() first only then use or() or and().

async function getCoursesLogicalOperator(){
    const result =  await Course
                      .find()             //Don't forget to write find() first
                      .or([{author:'Mosh'},{isPublished:true}])  //courses with author as mosh or isPublished is true
                      .select({author:1,isPublished:1,name:1});
  
      console.log(result);                
  }
  
 getCoursesLogicalOperator();


//We can use regular expressions as well to fetch documents.We use /pattern/ to define regular expressions.

async function getCoursesRegularExpression(){
    const result =  await Course
                      //.find({author:/^Mosh/})    //courses with author start with Mosh
                      //.find({author:/Mosh$/})    //courses with author end with Mosh
                      .find({author:/.*Mosh.*/i}) //courses that contains Mosh. i is a flag used for case insensitivity
                      .select({author:1,name:1});
  
      console.log(result);                
  }
  
  getCoursesRegularExpression();

  //use count() instead of select() if you want to know the number of count of documents fetched.

  async function getCoursesCount(){
    const result =  await Course
                      .find({author:'Mosh',price:{$gt:10},name:/Js$/})  
                      .count();
  
      console.log('Count is:',result);                
  }

//getCoursesCount() will return count of courses with Author = Mosh and price greater than 10 and name ends with Js
  
getCoursesCount();

//To implement pagination we use skip() and limit().
//eg-
// const pageNuber = 2
// const pageSize = 10

//  Course.
//     find()
//     .skip((pageNumber-1)*pageSize)
//     .limit(pageSize)