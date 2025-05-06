const mongoose = require('mongoose');

const crimeAlertSubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    area: {
        type: {
            type: String,
            enum: ['Polygon'],
            required: true,
        },
        coordinates: [[[Number]]], // GeoJSON Polygon: [[[lon, lat], [lon, lat], ...]]
    },
});

const crimeAlertSubscription = mongoose.model('crimeAlertSubscription', crimeAlertSubscriptionSchema);
module.exports = { crimeAlertSubscription };
