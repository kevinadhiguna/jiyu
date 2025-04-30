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
});

const communityReport = mongoose.model('communityReport', communityReportSchema);
module.exports = { communityReport };
