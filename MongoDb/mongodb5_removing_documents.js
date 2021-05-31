//Let's see how to remove a document

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

async function removeCourse(id){
    const result = await Course.deleteOne({_id:id});
    console.log(result);

    // const result = await Course.deleteMany({isPublished:false});  //Delete multiple documents
    // console.log(result);

    // const course = Course.findByIdAndRemove(id);   //If you want to see deleted document.
    // console.log(course);
}

removeCourse('60b39d2bc3e8e4062cd43508');