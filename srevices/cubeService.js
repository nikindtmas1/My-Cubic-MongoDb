const Cube = require('../models/cubic');


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

}

module.exports = {

    getAll,
    getOne,
    create
}