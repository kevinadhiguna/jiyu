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
});

const policeReport = mongoose.model('policeReport', policeReportSchema);
module.exports = { policeReport };
