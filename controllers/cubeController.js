const express = require('express');
const router = express.Router();

const cubeService = require('../srevices/cubeService');
const accessoryService = require('../srevices/accessoryService');

const { isAuth } = require('../middlewares/authMiddleware');


router.get('/', (req, res) => {
    cubeService.getAll(req.query)
    .then(results => {

        res.render('index', {title: 'Brows', results});
    })
});

router.get('/create',isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', cubeValide, (req, res) => {
    let data = req.body;

    cubeService.create(data);

    res.redirect('/cubics');
});

router.get('/details/:cubId', async (req, res) => {
    let result = await cubeService.getOneWithAccessories(req.params.cubId);

    res.render('details', {title: 'Cube Details', result})
});

router.get('/:cubId/attach',isAuth, async (req, res) => {
    let result = await cubeService.getOne(req.params.cubId);
    let accessories = await accessoryService.getAllWithout(result.accessories);

    res.render('attachAccessory', {result, accessories});
});

router.post('/:cubId/attach', async (req, res) => {
    cubeService.attachAccessory(req.params.cubId, req.body.accessory)
    .then(() => res.redirect(`/cubics/details/${req.params.cubId}`))
});



router.get('/:cubId/delete',isAuth,async (req, res) => {
    let result = await cubeService.getOneWithAccessories(req.params.cubId);
   if(!req.user){
       return res.redirect('/auth/login')
   }
   
    res.render('delete', {title: 'Delete Cub', result});
});

router.post('/:cubId/delete',isAuth,async (req, res) => {
    let result = await cubeService.getOneWithAccessories(req.params.cubId);
    let cubId = req.params.cubId;
   
   if(!req.user){
       return res.redirect('/auth/login')
   }

   await cubeService.deleteCube(result);
   
    res.redirect('/cubics');
});

router.get('/:cubId/edit',isAuth, (req, res) => {
    res.render('edit');
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