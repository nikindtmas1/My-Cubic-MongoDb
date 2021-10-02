const express = require('express');
const router = express.Router();
const accessoryService = require('../srevices/accessoryService');

router.get('/create', (req, res) => {
    res.render('createAccessory');
});

router.post('/accessories/create', (req, res) => {
    let data = req.body;
    console.log(data);
    accessoryService.createAcces(data);

    res.redirect('/')
});

router.get('/attach/accessory/cubId', (req, res) => {
    res.render('attachAccessory');
});

module.exports = router;