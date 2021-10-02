const mongoose = require('mongoose');

const cubicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    }
});

module.exports = mongoose.model('Cube', cubicSchema);