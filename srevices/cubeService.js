const Cube = require('../models/cubic');


async function getAll(query){

   let results = await Cube.find({}).lean();


   return results;
}

async function getOne(id){

    let results = await Cube.findById(id).lean();

    return results;
}

module.exports = {

    getAll,
    getOne
}