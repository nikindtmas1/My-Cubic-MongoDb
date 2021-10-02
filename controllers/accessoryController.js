const express = require('express');
const router = express.Router();


router.get('/create/accessory', (req, res) => {
    res.render('createAccessory');
});

module.exports = router;