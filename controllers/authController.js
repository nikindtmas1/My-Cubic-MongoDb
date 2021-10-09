const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');

const userService = require('../srevices/userService');


router.get('/login', (req, res) => {

    res.render('auth/login')
});

router.post('/login', (req, res) => {

    res.redirect('/')
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