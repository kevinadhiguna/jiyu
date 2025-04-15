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
});

const ioc = mongoose.model('IoC', IoCschema);
module.exports = { ioc };
