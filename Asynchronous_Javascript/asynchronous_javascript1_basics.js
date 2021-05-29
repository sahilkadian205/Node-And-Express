//Synchronous Vs Asynchronous 

//Synchronous
//In Synchronous way all the statements will be executed one by one. We can execute next statement only when previous statement is executed.
//eg-
console.log('Statement 1 executed....');
console.log('Statement 2 executed....');
console.log('Statement 3 executed....');

//All the statements will be executed in a sequence.

//Asynchronous
//In Asynchronous way one statement can execute before its previous statement.
//eg-
console.log('Statement 1 executed....');
setTimeout(() => {
    console.log('Statement 2 executed....');
}, 2000);
console.log('Statement 3 executed....');

//So in above example statement 1 will execute then statement 3 and then statement 2. Statement 3 doesn't have to wait 
//for its previous statement (which is statement 2) to be executed first.

//So Asynchronous way is a better way as we have doesn't have to wait for other statements to execute.
//To relate it with real world example - we can have some code which will bring data from database which will take some time maybe
//1 or 2 seconds.So we don't have to wait for this db call to execute first (waiting for 1 or 2 seconds) and can execute our other code
//in that time if we use Asynchronous way.

//Even if we write our code in Asynchronous way we don't have concurrency or in simple words 'multithreading'.We always have single thread.
//If we write code in Synchronous way then thread will execute code one by one.
//If we write code in Asynchronous way then thread will execute statement1 then schedule setTimeout() function and execute statement3 and
//then execute statement after time interval is over defined in setTimeout() method.

//In real world application we store data in a database. So, to deal with database code we should have clear understanding of Asynchronous 
//way of writing code.

//Comment above settimeout() code to understand output of below code 

console.log('Before');
const result = getUser(1);
console.log('Result is:', result);
console.log('After');

function getUser(id){
    setTimeout(() => {
        console.log('Fetching User Details....');
        return {id:id,name:'Sahil'};
    }, 2000);
}

//You will see result is undefined. Why it happened.
//Reason is by the time we call getUser() we will not have any data because the setTimeout function will return the data only after 2 seconds.
//That's why we got undefined. To resolve this issue we have below patterns.

//There are 3 patterns to implement Asynchronous code - 
//1) Callbacks
//2) Promises
//3) Async And Await

//There will be multiple Asynchronous function in one file.So, to see output of some Asynchronous code comment out other Asynchronous functions.