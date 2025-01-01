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
});

const device = mongoose.model('device', deviceSchema);
module.exports = device;
