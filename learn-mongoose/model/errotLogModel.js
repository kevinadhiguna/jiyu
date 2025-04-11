const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
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
    level: {
        type: String,
        enum: ['info', 'warn', 'critical', 'error'],
        default: 'error',
    },
});

const errorLog = mongoose.model('ErrorLog', errorLogSchema);
module.exports = { errorLog };
