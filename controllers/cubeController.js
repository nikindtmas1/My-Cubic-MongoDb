const express = require('express');
const router = express.Router();

const cubeService = require('../srevices/cubeService');
const accessoryService = require('../srevices/accessoryService');

router.get('/', (req, res) => {
    cubeService.getAll()
    .then(results => {

        res.render('index', {title: 'Brows', results});
    })
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', cubeValide, (req, res) => {
    let data = req.body;

    cubeService.create(data);

    res.redirect('/cubics');
});

router.get('/details/:cubId', async (req, res) => {
    let result = await cubeService.getOne(req.params.cubId);

    res.render('details', {title: 'Cube Details', result})
});

router.get('/:cubId/attach', async (req, res) => {
    let result = await cubeService.getOne(req.params.cubId);
    let accessories = await accessoryService.getAllWithout(result.accessories);

    res.render('attachAccessory', {result, accessories});
});

router.get('*', (req, res) => {
    res.render('404');
});

function cubeValide(req, res, next){
    let isValid = true;

    if(req.body.name.trim().length < 2){
        isValid = false;
    }else if(!req.body.imageUrl){
        isValid = false;
    }

    if(isValid){
        next();
    }

}

module.exports = router;