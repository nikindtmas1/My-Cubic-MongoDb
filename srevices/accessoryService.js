const Accessory = require('../models/accessory');

async function getAllAccessory() {

    let result = await Accessory.find({}).lean();

    return result;
}

function createAcces(data) {
    let accessory = new Accessory(data);

    accessory.save();
}

module.exports = {

    getAllAccessory,
    createAcces,

}