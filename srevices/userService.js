const User = require('../models/user');

function createUser(data){
    
    let user = new User(data);
    console.log(user);
   return user.save();

};

module.exports = {
    createUser
}