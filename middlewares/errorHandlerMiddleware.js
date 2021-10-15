

function errHandler(error, req, res, next){

    if(error){
        console.log(error);
        res.locals.error = error;
        res.render('404')
    }
};

module.exports = {

    errHandler
}