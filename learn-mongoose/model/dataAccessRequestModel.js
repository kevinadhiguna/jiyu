const mongoose = require('mongoose');

const dataAccessRequestSchema = new mongoose.Schema({
    requestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const dataAccessRequest = mongoose.model('DataAccessRequest', dataAccessRequestSchema);
module.exports = dataAccessRequest;
