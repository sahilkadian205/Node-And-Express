//We can have a scenario where while doing validation we need some data (maybe from db or api) which will take time.
//So,in that case we will use async validator.
//Don't forget to set isAsync property as true.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
        .then(()=>console.log('Connected to mongodb..........'))
        .catch(()=>console.log('Not able to connect mongodb........',err));

const courseSchema = new mongoose.Schema({
    name : {type:String,required:true},
    author : String,
    tags : {
        type:Array,
        validate:{
            isAsync : true,                      //set this property as true
            validator : function(v,callback){    //Using callback approach for async operation.
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 2000);
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
    //name : 'React Js', 
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
        for(fields in ex.errors){
            console.log(ex.errors[fields].message);   //Now you will get mutiple validation errors if multiple validation fails.
        }
    }
}

createCourse();