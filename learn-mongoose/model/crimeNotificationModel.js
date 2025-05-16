const mongoose = require('mongoose');

const crimeNotificationSchema = mongoose.Schema({
    recepient: {
        type: new mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}); 

const crimeNotification = mongoose.model('crimeNotification', crimeNotificationSchema);
module.exports = { crimeNotification };
