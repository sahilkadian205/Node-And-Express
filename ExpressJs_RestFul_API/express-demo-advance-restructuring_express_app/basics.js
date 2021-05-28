//We want to segregate our related code in different modules.So that main file which we name index.js or app.js has only startup code.
//We used different routes get,put,post and delete and we want routes starting with /api/courses in same module.

//we will create a courses.js file inside routes folder and write all our routes here in courses.js file.
//But one thing here to notice is that we will not use app object.
//Express has a method Router() which returns an object which we will use to write our routes.
//We will export this route object and import it in app.js.
//We will import routes module using require() and store it in an object.
//in app.js we will write 
//app.use('/api/courses',courses);
//'api/courses' - is the route that we want to handle or in other words simply a http request with /api/courses
//courses - is the router object returned by require() method.
//As we have defined in app.js (app.use('/api/routes')) that if http request is /api/courses 
//then use courses router to handle routes.Now, we have to remove /api/courses in courses module and simply write / instead of /api/courses.
//if we dont change /api/courses to / then application will expect route as /api/courses/api/courses. 

//Similarly we will create home module to handle http request with / in routes folder.

//If we are using some middleware function then create a folder middleware and put middleware module there.

//This way our code looks cleaner and its maintainable.
