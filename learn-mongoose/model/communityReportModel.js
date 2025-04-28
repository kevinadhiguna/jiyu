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
});

const communityReport = mongoose.model('communityReport', communityReportSchema);
module.exports = { communityReport };
