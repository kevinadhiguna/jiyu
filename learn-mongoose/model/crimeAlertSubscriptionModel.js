const mongoose = require('mongoose');

const crimeAlertSubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const crimeAlertSubscription = mongoose.model('crimeAlertSubscription', crimeAlertSubscriptionSchema);
module.exports = { crimeAlertSubscription };
