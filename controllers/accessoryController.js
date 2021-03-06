const express = require('express');
const router = express.Router();
const accessoryService = require('../srevices/accessoryService');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create',isAuth, (req, res) => {
    res.render('createAccessory');
});

router.post('/create', accessoryValid, (req, res) => {
    let data = req.body;
   
    accessoryService.createAcces(data);

    res.redirect('/')
});

// router.get('/attach/accessory/cubId', (req, res) => {
//     res.render('attachAccessory');
// });

function accessoryValid(req, res, next) {
    let isValidAccess = true;

    if(req.body.name.trim().length < 2){
        isValidAccess = false;
    }else if(!req.body.imageUrl){
        isValidAccess = false;
    }

    if(isValidAccess){
        next();
    }
}

module.exports = router;