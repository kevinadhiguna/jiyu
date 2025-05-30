const mongoose = require('mongoose');

const communityReportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    details: {
        type: String,
        required: true,
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: [Number],
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'escalated'],
        default: 'pending',
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const communityReport = mongoose.model('communityReport', communityReportSchema);
module.exports = { communityReport };
