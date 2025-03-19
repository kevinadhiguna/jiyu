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
    prepTime: {
        type: Number, // in minutes
        required: true,
    },
    cookingTime: {
        type: Number, // in minutes
        required: true,
    },
});

const recipe = mongoose.model('recipe', recipeSchema);
module.exports = recipe;
