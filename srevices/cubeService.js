const Cube = require('../models/cubic');
const Accessory = require('../models/accessory');



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

function create(data){
    
    let cube = new Cube(data);

   return cube.save();

};

async function attachAccessory(cubId, accessoryId){

    let result = await Cube.findById(cubId);
    let accessory = await Accessory.findById(accessoryId);

    result.accessories.push(accessory);

    return result.save();
}

module.exports = {

    getAll,
    getOne,
    create,
    attachAccessory,

}