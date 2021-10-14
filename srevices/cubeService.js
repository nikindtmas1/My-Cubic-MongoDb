const Cube = require('../models/cubic');
const Accessory = require('../models/accessory');
const jwt = require('jsonwebtoken');



async function getAll(query){

   let results = await Cube.find({}).lean();

   if(query.search){
     results = results.filter((x) => x.name.toLowerCase().includes(query.search));
   };

   if(query.from){
       results = results.filter((x) => Number(x.difficultyLevel) >= query.from);
   }

   if(query.to){
       results = results.filter((x) => Number(x.difficultyLevel) <= query.to);
   }


   return results;
}

async function getOne(id){

    let results = await Cube.findById(id).lean();

    return results;
}

async function getOneWithoutId(data){
    let result = await Cube.findOne(data);

    return result;
}

function create(data, userId){
    
    let cube = new Cube(data, userId);

   return cube.save();

};

async function attachAccessory(cubId, accessoryId){

    let result = await Cube.findById(cubId);
    let accessory = await Accessory.findById(accessoryId);

    result.accessories.push(accessory);

    return result.save();
};

function getOneWithAccessories(id){
    return Cube.findById(id).populate('accessories').lean();
}

function deleteCube(result){
   
   return Cube.deleteOne(result)
}

async function editCub(id){
    let results = await Cube.findById(id).lean();

    return results;
}

async function updateOne(id, data){
    let results = await Cube.findByIdAndUpdate(id, data).lean();

    return results;
}

module.exports = {

    getAll,
    getOne,
    create,
    attachAccessory,
    getOneWithAccessories,
    deleteCube,
    updateOne,
    getOneWithoutId,
}