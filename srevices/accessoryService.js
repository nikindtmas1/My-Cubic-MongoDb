const Accessory = require('../models/accessory');

async function getAllAccessory() {

    let result = await Accessory.find({}).lean();

    return result;
}

async function getAllWithout(ids) {
    let result = await Accessory.find({_id: {$nin: ids}}).lean();

    return result;
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