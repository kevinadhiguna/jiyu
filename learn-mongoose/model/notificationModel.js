const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
});

const notification = mongoose.model('Notification', notificationSchema);
