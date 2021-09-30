const Cube = require('../models/cubic');


async function getAll(query){

   let results = await Cube.find({}).lean();


   return results;
}

module.exports = {

    getAll
}