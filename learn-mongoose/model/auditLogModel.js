const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const auditLog = mongoose.Model('auditLogs', auditLogsSchema);
module.exports = auditLog;
