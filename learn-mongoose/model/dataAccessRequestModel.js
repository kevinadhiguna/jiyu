const mongoose = require('mongoose');

const dataAccessRequestSchema = new mongoose.Schema({
    requestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // resource being accessed
    resource: {
        type: String, // To-do: make this plural?
        required: true,
    },
    // reason to for requesting access
    reason: {
        type: String,
        required: true,
    },
    // Supports an approval process to manage data access responsibly
    status: {
        type: String,
        enum: ['pending', 'approved', 'denied'],
        default: 'pending',
    },
    requestedAt: {
        type: Date,
        default: Date.now,
    },
});

const dataAccessRequest = mongoose.model('DataAccessRequest', dataAccessRequestSchema);
module.exports = dataAccessRequest;
