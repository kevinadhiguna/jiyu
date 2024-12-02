const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
}, {
    // Automatically adds createdAt and updatedAt
    timestamp: true,
});

const notification = mongoose.model('Notification', notificationSchema);
