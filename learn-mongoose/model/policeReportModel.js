const mongoose = require('mongoose');

const policeReportSchema = new mongoose.Schema({
    reportId: {
        type: String,
        required: true,
        unique: true,
    },
    details: {
        type: String,
        required: true,
    },
    reportedDate: {
        type: Date,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['point'],
        },
        coordinates: [Number],
    },
});

const policeReport = mongoose.model('policeReport', policeReportSchema);
module.exports = { policeReport };
