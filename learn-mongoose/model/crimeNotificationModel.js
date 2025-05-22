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
    type: {
        type: String,
        enum: ['Incident Alert', 'System Update', 'Community Notice'],
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
    sentAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
}); 

const crimeNotification = mongoose.model('crimeNotification', crimeNotificationSchema);
module.exports = { crimeNotification };
