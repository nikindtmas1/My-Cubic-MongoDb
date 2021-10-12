const secretStr = require('../config/config');
const jwt = require('jsonwebtoken');


function auth(req, res, next){
    let token = req.cookies.cookieToken;
  

    if(!token){
        return next();
    }

    jwt.verify(token, secretStr.secret, function(err, decodedToken){
        if(err) {
            return res.status(401).redirect('/auth/login');
        }

        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    });

}

function isAuth(req, res, next){
    if(!req.user){
        return res.status(401).redirect('/auth/login');
    }

    next();
}

module.exports = {
    auth,
    isAuth
};