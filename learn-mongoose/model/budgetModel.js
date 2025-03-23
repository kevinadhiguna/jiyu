const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
});

const budget = mongoose.model('budget', budgetSchema);
module.exports = budget;
