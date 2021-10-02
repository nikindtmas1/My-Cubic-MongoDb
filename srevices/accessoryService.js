const Accessory = require('../models/accessory');

function createAcces(data) {
    let accessory = new Accessory(data);

    accessory.save();
}

module.exports = {

    createAcces,
    
}