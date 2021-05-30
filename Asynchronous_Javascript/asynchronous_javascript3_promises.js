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