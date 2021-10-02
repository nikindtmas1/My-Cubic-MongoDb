const express = require('express');
const router = express.Router();
const accessoryService = require('../srevices/accessoryService');

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory');
});

router.post('/create/accessory', (req, res) => {
    let data = req.body;

    accessoryService.createAcces(data);
});

router.get('/attach/accessory/cubId', (req, res) => {
    res.render('attachAccessory');
});

module.exports = router;