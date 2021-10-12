const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
const { createToken }  = require('../utils/jwtUtils');


const userService = require('../srevices/userService');



router.get('/login', (req, res) => {

    res.render('auth/login')
});

router.post('/login', async (req, res) => {
    let data = req.body;
    // console.log(data.username);
    // console.log(data.password);
    let user = await userService.loginUser(data);

    if(!user){

       return res.redirect('404')
    }

    let token = await createToken(user);
    console.log(token);
    res.cookie('cookieToken', token, {
        httpOnly: true
    })
        res.redirect('/')
    
});

router.get('/register', (req, res) => {

    res.render('auth/register')
});

router.post('/register', async (req, res) => {
    
    let data = req.body

 await userService.createUser(data);
  

    res.redirect('/auth/login')
});

router.get('/logout', (req, res) => {
    res.clearCookie('cookieToken');
    res.redirect('/cubics')
});

module.exports = router