// Indicator of Compromise
const  mongoose = require('mongoose');

const IoCschema = new mongoose.Schema({
    indicatorId: {
        type: String,
        required: true,
    },
});

const ioc = mongoose.model('IoC', IoCschema);
module.exports = { ioc };
