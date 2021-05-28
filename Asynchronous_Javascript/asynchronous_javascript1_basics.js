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

//For implementing Asynchronous way we use following - 
//1) Callbacks
//2) Promises
//3) Async And Await