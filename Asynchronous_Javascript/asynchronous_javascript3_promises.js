//Now lets see promises.

//Promise
//Promise is an object that holds eventual result of an Asynchronous operation.When Asynchronous operation completes it can either result in
//a value or error.
//A promise basically promises that it would give result of an Asynchronous operation.

//Promise object can be in 3 states -
//a)penidng state - initially when promise object is created it will be in pending state and will kick off some Asynchronous code.
//b)resolved state - if no error occurs while executing Asynchronous code then it will provide the result and will be in resolved state.
//c)rejected state - if some error occurs while executing Asynchronous code then it will provide error and will be in rejected state.

//We create promise object using new Promise().
//Promise(callbackfunction(resolve,rejected)=>{})     //resolve and rejected are references to a function. We will pass the value in resolve() if no
//error occurs and if some error occurs then we will pass error message or error object in reject().
//We use then() function to get result and catch() to get error.

console.log('Starting........');
const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //Some aysnc code.
        resolve({id:1,name:'Sahil'});   //If no error while executing some async code then will send the result.
        //reject(new Error('Error Message'));  //If some error occurs while executing some async code then will send the error.
    }, 2000);

});
console.log('Ending........');

p
 .then(result=> console.log(result))
 .catch(error=>console.log(error.message))          //.then().catch() this is called chaining

//We saw callbacks earlier

//  function getUser(id,callback){
//     setTimeout(() => {
//         console.log('Fetching user data......');
//         callback({id:id,githubUsername:'Sahil'});            //For simplicity we are just passing an object.
//     }, 2000);
// }

//Now let's convert callbacks to promises.
function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Fetching user data......');
            resolve({id:id,githubUsername:'Sahil'});
        }, 2000);
    });
}

//Similarly let's create two more functions using promises.

function getRepos(gitUsername){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Fetching github user name......');
            resolve(['repo1','repo2']);
        }, 2000);
    });
}

function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           console.log('Fetching commits.......');
           resolve(['commit1','commit2']); 
        }, 2000);
    });
}

//Let's consume these promises

const p1 = getUser(1);
p1.then(result=>console.log(result));

//A better way to write above code by calling then function directly because getUser() function returns a promise.
getUser(1).then(result=>console.log('Result is:',result));

//Lets use chaining to call all three methods.
//Once we get the result then we will call getRepos() function by passing githubUsername.

getUser(1)
    .then(result=>getRepos(result.githubUsername));

//getRepos will also return a promise and 'then' will wrap this returned promise in a promise.Now we can again use then method to call some other 
//functions. 

getUser(1)
    .then(result=>getRepos(result.githubUsername))
    .then(repos=>getCommits(repos[0]))
    .then(commits=>console.log(commits));

//So our code will look like above with chaining.We should always chain catch() as well if any error occurs    

getUser(1)
    .then(result=>getRepos(result.githubUsername))
    .then(repos=>getCommits(repos[0]))
    .then(commits=>console.log(commits))
    .catch(err=>console.log(err.message));


//Settled Promises
//Sometimes we want promise object that are already resolved or rejected.These are called as settled promises.
//eg- Settled resolved promise
const p2 = Promise.resolve({id:1,name:'Sahil'});
p2.then(res=>console.log(res));

//eg-Settled rejected promise
const p3 = Promise.reject(new Error('Error Occured'));   //Using error object we will get the callstack.
p3.catch(err=>console.log(err));


//Running Parallel Promises
//Sometimes we want to execute some code when all Asynchronous code is executed.
//We use Promises.all() function. all() takes array of promises which needs to be completed and returns a promise which has array of result 
//returned by promises.If some error occurs in any of the promises then we will get error.

const p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Executing async task 1.......');
        resolve(1);
        //reject(new Error('Error Occured...'));
    }, 2000);
});

const p5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Executing async task 2.......');
        resolve(2);
    }, 2000);
});

Promise.all([p4,p5])
                    .then(result=>console.log(result))
                    .catch(err=>console.log(err));    //To stimulate this comment resolve and uncomment reject in promise p4.

//Now if we don't want to wait for both promises to complete and want result of a promise which completes first then use race() function.                   

const p6 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Executing async task 1.......');
        resolve('Result of promise p6');
    }, 5000);
});

const p7 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Executing async task 2.......');
        resolve('Result of promise p7');
    }, 2000);
});

Promise.race([p6,p7])                                     //p7 will get completed first as it will take 2 seconds and p6 will take 5 seconds.
                    .then(result=>console.log(result))
                    .catch(err=>console.log(err));