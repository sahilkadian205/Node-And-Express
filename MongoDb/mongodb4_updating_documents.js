//So far we have seen how to create and fetch documents.
//Let's see how to update them.

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

//There are two ways for updating douments
//1)Query First
//In this approach we will find the document first then update its property and then save it.
async function updateCourseQueryFirst(id){
    const course = await Course.findById(id);
    if(!course) return;
    course.isPublished = true;
    course.author = 'Mosh Hamedani';

    //'or'

    // course.set({                    //use set() method to update properties
    //     isPublished:true,
    //     author:'Mosh Hamedani'
    // });
    const result = await course.save();
    console.log(result);
}

updateCourseQueryFirst('60b39cb7c863432b9c4880ed');


//2)Update First
//In this approach we will update the document directly.

async function updateCourseUpdateFirst(id){
   const result =await Course.update({_id:id},
        {
            $set:{
                name : 'Java Made Easy By Saurabh Shukla',
                author : 'Saurabh Shukla'
            }
        });

    console.log(result);
    
    //If you want to see updated course then use below code.

    // const course = await Course.findByIdAndUpdate(id,
    //     {
    //         $set:{
    //             name : 'Java By Saurabh Shukla',
    //             author : 'Saurabh Shukla'
    //         }
    //     },{new : true});    //if you don't set this as true you will get document before updation.

    // console.log(course);
}

updateCourseUpdateFirst('60b39d0fa79db121502c4a63');