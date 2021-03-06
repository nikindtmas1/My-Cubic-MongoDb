const express = require('express');
const router = express.Router();

const cubeService = require('../srevices/cubeService');
const accessoryService = require('../srevices/accessoryService');

const { isAuth } = require('../middlewares/authMiddleware');
const { isOwnCube } = require('../middlewares/authCubeMiddleware');
const { errHandler } = require('../middlewares/errorHandlerMiddleware');


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

    cubeService.create(data, req.user._id);

    res.redirect('/cubics');
});

router.get('/details/:cubId', async (req, res) => {
    let result = await cubeService.getOneWithAccessories(req.params.cubId);

    let isOwn = result.userId == req.user._id;

    res.render('details', { title: 'Cube Details', result, isOwn })
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



router.get('/:cubId/delete', errHandler, isAuth, isOwnCube ,async (req, res) => {
    let result = await cubeService.getOneWithAccessories(req.params.cubId);
   if(!req.user){
       return res.redirect('/auth/login')
   }
   
    res.render('delete', {title: 'Delete Cub', result});
});

router.post('/:cubId/delete',isAuth, isOwnCube ,async (req, res) => {
    let result = await cubeService.getOneWithAccessories(req.params.cubId);
  
   
   if(!req.user){
       return res.redirect('/auth/login')
   }

   await cubeService.deleteCube(result);
   
    res.redirect('/cubics');
});

router.get('/:cubId/edit',isAuth, isOwnCube ,async (req, res) => {
    let result = await cubeService.getOneWithAccessories(req.params.cubId);
 
    res.render('edit', {title: 'Edit Cube', result});
});

router.post('/:cubId/edit',isAuth, isOwnCube ,async (req, res) => {
    
    let { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeService.updateOne(req.params.cubId ,{name, description, imageUrl, difficultyLevel})
    
    // let editCub = req.body;    
    // let oldCub = await cubeService.getOne(req.params.cubId);
    // let accessories = await accessoryService.getAllWithout(oldCub.accessories);
    // await cubeService.deleteCube(oldCub);
    // await cubeService.create(editCub);
    // let newCub = await cubeService.getOneWithoutId(editCub);
    
    
    
    res.redirect('/cubics');
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