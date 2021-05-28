function log(req,res,next){    //log is a middleware function
    console.log('Logging.....');
    next();
}

module.exports = log;