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
    crimeTypes: [{
        type: String,
        enum: ['theft', 'assault', 'vandalism', 'suspicious activity', 'other'],
    }],
    active: {
        type: Boolean,
        default: true,
    },
});

const crimeAlertSubscription = mongoose.model('crimeAlertSubscription', crimeAlertSubscriptionSchema);
module.exports = { crimeAlertSubscription };
