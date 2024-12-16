const mongoose = require('mongoose');

// A model for storing genomic data, such as gene sequences or clinical genetic test results.
const genomicDataSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
});

const genomicData = mongoose.model('genomicData', genomicDataSchema);
module.exports = genomicData;
