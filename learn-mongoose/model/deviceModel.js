const mongoose = require('mongoose');

// A model for storing device information, including status and data collected (in IoT devices, for example)
const deviceSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true,
        unique: true,
    },
    deviceName: {
        type: String,
        required: true,
    },
    deviceType: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['online', 'offline', 'inactive'],
        default: 'offline',
    },
    data: [{
        type: mongoose.Schema.Types.Mixed, // store various sensor data
    }],
});

const device = mongoose.model('device', deviceSchema);
module.exports = device;
