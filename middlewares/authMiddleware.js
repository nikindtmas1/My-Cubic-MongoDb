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

        next();
    });

}

module.exports = auth;