// Indicator of Compromise
const  mongoose = require('mongoose');

const IoCschema = new mongoose.Schema({
    indicatorId: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['ip', 'domain', 'hash', 'url', 'email'],
        required: true,
    },
    value: {
        type: String,
        required: true,
        trim: true,
    },
    threatType: {
        type: String,
        enum: ['malware', 'phishing', 'botnet', 'ransomware', 'unknown'],
        default: 'unknown',
    },
    confidence: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    lastSeen: {
        type: Date,
        default: Date.now,
    },
});

const ioc = mongoose.model('IoC', IoCschema);
module.exports = { ioc };
