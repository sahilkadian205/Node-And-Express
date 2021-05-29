//What is a callback ?
//In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.
//So, we can also pass functions as parameters to other functions and call them inside the outer functions. Sounds complicated? Let me 
//show that in an example below:

function print(callback) {  
    callback();
}

//The print( ) function takes another function as a parameter and calls it inside. This is valid in JavaScript and we call it a “callback”. 
//So a function that is passed to another function as a parameter is a callback function.

// console.log('Before');
// const result = getUser(1);
// console.log('Result is:', result);
// console.log('After');

// function getUser(id){
//     setTimeout(() => {
//         console.log('Fetching User Details....');
//         return {id:id,name:'Sahil'};
//     }, 2000);
// }

//So we saw earlier we will get result as undefined.

//Let's implement this using callbacks.

console.log('Before');
getUser(1,(userObj)=>{        //getUser has two paramters 1-userid , (userObj)=>{} - callback function that we will recieve from setTimeout function.
    console.log('User:', userObj);
})
console.log('After');

function getUser(id,callback){      //we will introduce another parameter 'callbacks' which is function and will use to fetch data.
    setTimeout(() => {
        console.log('Fetching user data......');
        callback({id:id,name:'Sahil'});     //This will be recieved (when data is received) in anonymous function which is second parameter in getUser() function.
                                            //Here we are calling callback() and passing data when data is fetched or ready.
    }, 2000);
}

//There will be multiple Asynchronous function in one file.So, to see output of some Asynchronous code comment out other Asynchronous code.

//Now let's write some Asynchronous code.
//First we have to fetch githubUsername from getUser() method based on id and then pass this githubUsername to another function getRepos() to fetch
//all repos of that githubUsername
//All methods should follow Asynchronous callbacks pattern.Set time to 2000ms for every method.

const users = [
    {id:1,githubUsername:'user1'},
    {id:2,githubUsername:'user2'},
    {id:1,githubUsername:'user3'}
];

const repos = [
    {userName:'user1',repos:['r1','r2']},
    {userName:'user2',repos:['r3','r4']},
    {userName:'user3',repos:['r5','r6']}
];

function getUser(id,callback){
    setTimeout(() => {
        console.log('Fetching user data......')
        callback(users.find((c)=>{
            return c.id === id;
        }));
    }, 2000);
}

function getRepos(gitUserame,callback){
    setTimeout(() => {
        console.log(`Fetching ${gitUserame} repos.......`);
        const repObj = repos.find((c)=>{
            return c.userName === gitUserame;
        });
        callback(repObj.repos);
    }, 2000);
}

console.log('Starting.....');

getUser(2,(userObj)=>{
    console.log('Username github user name is :',userObj.githubUsername);
    getRepos(userObj.githubUsername,(repos)=>{
        console.log('User repos are : ',repos);
    })
});

console.log('Ending.......');

//So, we successfully implemented Asynchronous code. But if look closely at above code there is nesting in our code. getUser and then 
//getRepos are nested. Suppose if we want to fetch commits in particular repo then our code will look like below -

// getUser(2,(userObj)=>{
//     getRepos(userObj.githubUsername,(repos)=>{
//         getCommits(repos[0],(commits)=>{
//             console.log(commits);
//         })
//     })
// });

//See now our code is more nested. In real world application if we write this way it will be way worse nested structure.
//This is what we call 'CALLBACK HELL' or 'Christmas tree problem' becuase this nested structure looks like christmas tree.

//How to resolve this CALLBACK HELL problem. Named functions is the answer.

//If we see we are using anonymous function (userObj)=>{ //some code }. Instead of this anonymous function we will use named function.
//We wil simply pass the refernce of the function, will not call it.

//But first create another function getCommits()

function getCommits(repos,callback){
    setTimeout(() => {
        console.log('Fetching commits......');
        callback(['commit1','commit2','commit3']);      //We are just passing an array of strings for simplicity.
    }, 2000);
}


// getUser(2,(userObj)=>{
//         getRepos(userObj.githubUsername,(repos)=>{
//             getCommits(repos[0],(commits)=>{
//                 console.log(commits);
//             })
//         })
//     });

//to resolve CALLBACK HELL start with the innermost to outermost anonymous functions.
//First we will resolve (commits)=>{ //some code } . Cut this code and give it a name.


// getUser(2,(userObj)=>{
//         getRepos(userObj.githubUsername,(repos)=>{
//             getCommits(repos[0],)
//         })
//     });


//Our cutted code will look like below
// (commits)=>{
//   console.log(commits);
//             }

//Now give it a name and convert it from anonymous to named function.

function displayCommits(commits){
    console.log(commits);
}

//now use displayCommits refernce from where you cutted the code.

// getUser(2,(userObj)=>{
//         getRepos(userObj.githubUsername,(repos)=>{
//             getCommits(repos[0],displayCommits)
//         })
//     });

//Now similarly convert code from innermost to outermost.

// getUser(2,(userObj)=>{
//         getRepos(userObj.githubUsername,)
//     });


function getCommitsOfRepos(repos){
    getCommits(repos[0],displayCommits)
}

// getUser(2,(userObj)=>{
//         getRepos(userObj.githubUsername,getCommitsOfRepos)
//     });

// getUser(2,);

function getUserRepos(userObj){
    getRepos(userObj.githubUsername,getCommitsOfRepos);
}

// getUser(2,getUserRepos);

//Now our code will look like

console.log('Starting.....');

getUser(2,getUserRepos);      //CALLBACK HELL issue resolved.

console.log('Ending.......');