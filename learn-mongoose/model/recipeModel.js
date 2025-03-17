const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    instructions: {
        type: String,
        required: true,
    },
});

const recipe = mongoose.model('recipe', recipeSchema);
module.exports = recipe;
