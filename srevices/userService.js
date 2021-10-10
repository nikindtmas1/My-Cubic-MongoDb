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

function loginUser(data){
    let pass = data.password;
    let name = data.username;
    
    return User.findByUsername(name)
    .then(user => {
      return Promise.all([bcrypt.compare(pass, user.password), user])
       
    })
    .then(([isValid, user]) => {
        if(isValid){
            return user
        }else {
            throw { message: 'Username or password are invalid'}
        }
    })
    
    // bcrypt.hash(pass, 10)
    // .then(hash => {
    //   return  pass = hash;
    // })
    console.log(dbUser);
    //console.log(dbUser.password);
    // if(dbUser.password === pass){
    //     console.log("Corect password!");
    // }else{
    //     console.log('Not corect password!');
    // }
}

module.exports = {
    createUser,
    loginUser
}