const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    action: {
        type: String,
        required: true,
        enum: ['create', 'read', 'update', 'delete', 'login', 'logout'],
    },
    resource: {
        type: String,
        required: true,
    },
    details: {
        type: Object,
        default: {},
    },
    // Tracks the user's IP address for accountability (must be included in privacy policy)
    ipAddress: {
        type: String,
        required: true,
    },
    userAgent: {
        type: String,
        required: true,
    },
    metadata: {
        type: Object,
        default: {},
    },
}, {
    timestamps: true,
});

const auditLog = mongoose.Model('auditLogs', auditLogsSchema);
module.exports = auditLog;
