const express = require('express');
const router = express.Router();

const cubeService = require('../srevices/cubeService');

router.get('/', (req, res) => {
    cubeService.getAll()
    .then(results => {

        res.render('index', {title: 'Brows', results});
    })
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/details/:cubId', async (req, res) => {
    let result = await cubeService.getOne(req.params.cubId);

    res.render('details', {title: 'Cube Details', result})
});

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;