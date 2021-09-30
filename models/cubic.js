const mongoose = require('mongoose');

const cubicSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    difficulty: Number
});

module.exports = mongoose.model('Cube', cubicSchema);