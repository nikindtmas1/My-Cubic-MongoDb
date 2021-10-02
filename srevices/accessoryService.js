const Accessory = require('../models/accessory');

function getAllAccessory() {

    return Accessory.find({}).lean();
}

function getAllWithout(ids) {
   return Accessory.find({_id: {$nin: ids}}).lean();
}

function createAcces(data) {
    let accessory = new Accessory(data);

    accessory.save();
}

module.exports = {

    getAllAccessory,
    getAllWithout,
    createAcces,

}