//So far we have seen CRUD operations on a document.
//Let's see how to validation.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
        .then(()=>console.log('Connected to mongodb..........'))
        .catch(()=>console.log('Not able to connect mongodb........',err));

// const courseSchema = new mongoose.Schema({
//     name : String,
//     author : String,
//     tags : [String],
//     date : {type : Date, default : Date.now},
//     isPublished : Boolean,
//     price : Number
// });

//If you see here all the properties defined in schema are optional. 
//So, we can create empty documents i.e documents without setting any properties.

// const course = new Course({
//                                  //We didn't set any property
// });

// async function createCourse(){
//     const result = await course.save();
//     console.log('Course created:',result);
// }

// createCourse();         //This code will execute perfectly fine.It will create empty document.

//But this doesn't seems right.We should add some validators.
//To add validators we use object and set required property as true. {type:String,required:true}
//This validator is a part of mongoose not mongoDb.MongoDb doesn't care if you are creating empty documents.

const courseSchema = new mongoose.Schema({
        name : {type:String,required:true},
        author : String,
        tags : [String],
        date : {type : Date, default : Date.now},
        isPublished : {type:Boolean,required:true},
        price : {type:Number,required:true}
    });

const Course = mongoose.model('Course',courseSchema);    
 
//Now name, isPublished and price properties will be required.If you don't define this property you will get error.

const course = new Course({
    //name : 'React Js',       //Course validation failed: name: Path `name` is required.Uncomment this to save data.
    author : 'Mosh',
    tags : ['node','frontend'],
    isPublished : true,
    price : 10
});

async function createCourse(){
    try{
        const result = await course.save();
        console.log('Course created:',result);
    }
    catch(ex){
        console.log(ex.message);
    }
}

createCourse();

//We can use other validators as well. We can use function as well (don't use arrow function)

// const courseSchema = new mongoose.Schema({
//     name : {type:String,
//             required:true,
//             minlength:5,
//             maxlength:15,
//             match:/^[a-zA-Z]*$/},  //regular expression
//     author : String,
//     tags : [String],
//     date : {type : Date, default : Date.now},
//     isPublished : Boolean,
//     price : {type:Number,                   //price is required when isPublished is true and 10< price <50
//             min:10,
//             max:50,
//             set : (v)=>Math.round(v),
//             get : (v)=>Math.round(v),
//             required:function(){
//                 return this.isPublished
//             }},
//     category:{
//         type:String,
//         required:true,
//         enum:['node','javascript'],    //category with these values in array will pass validation
//         lowercase:true,
//         //uppercase:true
//     }        
// });