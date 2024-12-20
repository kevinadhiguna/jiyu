const mongoose = require('mongoose');

// A model for storing genomic data, such as gene sequences or clinical genetic test results.
const genomicDataSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    testDate: {
        type: Date,
        default: Date.now,
    },
    result: {
        type: String,
        enum: ['Normal', 'Abnormal', 'Indeterminate'],
        required: true,
    },
    comments: {
        type: String,
    },
}, {
    timestamps: true,
});

const genomicData = mongoose.model('genomicData', genomicDataSchema);
module.exports = genomicData;
