const User = require('../models/user');
const bcrypt = require('bcrypt');

function createUser(data){
    let username = data.username;
    let password = data.password;

    // bcrypt.hash(password, 10)
    // .then(hash => {
    //     let user = new User({username, password: hash});
    
    //     return user.save();
    // })
    
    let user = new User({username, password});
    
        return user.save();

};

module.exports = {
    createUser
}