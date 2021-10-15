const cubeService = require('../srevices/cubeService');

function isOwnCube(req, res, next){

    let cube = cubeService.getOne(req.params.cubId);

    if(cube.userId == req.user._id){
        req.cube = cube;

        next();
    }else{
        next('You are not authorized to edit this cube!');
    }


}

module.exports = {
    isOwnCube
};