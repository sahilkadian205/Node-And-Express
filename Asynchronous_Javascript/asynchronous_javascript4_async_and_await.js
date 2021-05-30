//Async And Await
//Async and Await approach is syntatic sugar of promises approach. Using Async and Await we can write Asynchronous code which looks Synchronous 
//which will be easier to write and read.

//Synatic Sugar maens -
//In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express.
//It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some 
//may prefer.

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Fetching user data......');
            resolve({id:id,githubUsername:'Sahil'});
        }, 2000);
    });
}

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

//Whenever a function returns a promise then we can await the result using 'await' keyword.
//It is a requirement by javascript engine that whenever you use await then it should be enclosed in a function and that enclosed function
//should have 'async' keyword in the staring of its declaration else we will get error - 'await is only valid in async function'

async function displayCommits(){
    const userObj = await getUser(1);                      //getUser,getRepos and getCommits returns promise so we can use await.
    const repos = await getRepos(userObj.githubUsername);  //All await statements are enclosed in displayCommits() function.
    const commits = await getCommits(repos[0]);             //displayCommits() has await statements so used async in starting of its declaration.
    console.log(commits);
}

//Now look at our code inside displayCommits function, it looks like Synchronous code but internally its converted into .then() when we 
//use await.Internal processing is same as that we saw in promises but async and await is just a syntactic sugar of promises to write
//Asynchronous code which looks Synchronous.

displayCommits();

//We should use try catch block while using await so if any error occurs we can catch those errors.

async function displayCommitsNew(){
    try{
        const userObj = await getUser(1);                     
        const repos = await getRepos(userObj.githubUsername);  
        const commits = await getCommits(repos[0]);   
        console.log(commits);
    }
    catch(err){
        console.log('catched an error:',err);
    }  
}

displayCommitsNew();