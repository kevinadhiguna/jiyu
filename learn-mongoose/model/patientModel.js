const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    dateOfBirth: {
        type: Date,
        required: true,
    },
});

const patient = new mongoose.Model('patient', patientSchema);
module.exports = patient;
