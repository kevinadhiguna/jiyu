const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    limit: {
        type: String,
        required: true,
    },
    currentAmount: {
        type: Number,
        default: 0,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
});

const budget = mongoose.model('budget', budgetSchema);
module.exports = budget;
