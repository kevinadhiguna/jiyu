const mongoose = require('mongoose');

// A model for managing user subscriptions in services such as Netflix, Spotify, or subscription-based websites
const subscriptionModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    plan: {
        type: String,
        enum: ['basic', 'family', 'premium'],
        required: true,
    },
});

const subscription = mongoose.model('subscrption', subscriptionModel);
module.exports = subscription;
