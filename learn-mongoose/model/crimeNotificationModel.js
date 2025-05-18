const mongoose = require('mongoose');

const crimeNotificationSchema = mongoose.Schema({
    recepient: {
        type: new mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    incident: {
        type: new mongoose.Schema.Types.ObjectId,
        ref: 'CrimeIncident',
        required: false, // Some notifications may not be tied to incidents
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
}); 

const crimeNotification = mongoose.model('crimeNotification', crimeNotificationSchema);
module.exports = { crimeNotification };
