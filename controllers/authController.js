const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');

const userService = require('../srevices/userService');


router.get('/login', (req, res) => {

    res.render('auth/login')
});

router.post('/login', async (req, res) => {
    let data = req.body;
    // console.log(data.username);
    // console.log(data.password);
    let user = await userService.loginUser(data);

    if(user){

        res.redirect('/')
    }else {

        res.redirect('404')
    }
});

router.get('/register', (req, res) => {

    res.render('auth/register')
});

router.post('/register', async (req, res) => {
    
    let data = req.body

   await userService.createUser(data)

    res.redirect('/auth/login')
});

module.exports = router