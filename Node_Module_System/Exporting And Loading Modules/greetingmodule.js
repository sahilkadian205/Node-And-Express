var somevar = 20;

function greet(name){
    console.log('Have a good day : '+name);
}

//Sometimes we need to export a single function or varibale. In that scenario we don't set properties in exports. We directly assign exports 
//to variable or function.

module.exports = greet; //don't assign exports directly i.e. exports = greet; in this case.
