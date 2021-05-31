//Now if we want to set a validation that tags should have atleast one tag.We can't use built in validators for this.
//We will use custom validator.
//We have a property called validate which contains a validtor function and a message property as well.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
        .then(()=>console.log('Connected to mongodb..........'))
        .catch(()=>console.log('Not able to connect mongodb........',err));

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : {
        type:Array,
        validate:{
            validator : function(v){
                return v && v.length > 0
            },
            message:'Tags should have atleast one tag.'
        }
    },
    date : {type : Date, default : Date.now},
    isPublished : Boolean,
    price : Number
});

const Course = mongoose.model('Course',courseSchema);    
 
const course = new Course({
    name : 'React Js', 
    author : 'Mosh',
    tags : [],    //or tags:null or just remove tags property and see output.You will get - 'Tags should have atleast one tag.'
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