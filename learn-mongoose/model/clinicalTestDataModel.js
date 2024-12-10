const mongoose = require('mongoose');

// A model for storing information related to clinical tests, particularly useful in hospitals or research labs.
const clinicalTestSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: true,
    },
});

const clinicalTest = mongoose.model('clinicalTest', clinicalTestSchema);
module.exports = clinicalTest;
