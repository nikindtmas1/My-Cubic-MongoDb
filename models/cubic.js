const mongoose = require('mongoose');

const cubicSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    difficultyLevel: Number
});

module.exports = mongoose.model('Cube', cubicSchema);