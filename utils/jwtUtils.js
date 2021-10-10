const jwt = require('jsonwebtoken');
const secretStr = require('../config/config');


function createToken(user){
    let payload = {
        _id: user.get('_id'),
        username: user.get('username')
    }
    let options = {
        expiresIn: '2d'
    }
    let token = jwt.sign(payload, secretStr.secret, options);

    console.log(token);

    return token;
}

module.exports = {
    createToken
}