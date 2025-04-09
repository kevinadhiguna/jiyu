const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    stackTrace: {
        type: String,
    },
    context: {
        type: Object,
    },
});

const errorLog = mongoose.model('ErrorLog', errorLogSchema);
module.exports = { errorLog };
