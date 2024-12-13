const mongoose = require('mongoose');

// A model for storing information related to clinical tests, particularly useful in hospitals or research labs.
const clinicalTestSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: true,
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    testDate: {
        type: Date,
        default: Date.now,
    },
    testType: {
        type: String,
        enum: ['Blood Test', 'Imaging', 'Genetic', 'other'],
        required: true,
    },
});

const clinicalTest = mongoose.model('clinicalTest', clinicalTestSchema);
module.exports = clinicalTest;
