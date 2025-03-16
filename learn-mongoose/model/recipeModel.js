const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const recipe = mongoose.model('recipe', recipeSchema);
module.exports = recipe;
