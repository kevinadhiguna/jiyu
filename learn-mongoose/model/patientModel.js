const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    contactInfo: {
        email: { type: String },
        phone: {type: String },
    },
    // To-do: improve medical history
    medicalHistory: [String],
});

const patient = new mongoose.Model('patient', patientSchema);
module.exports = patient;
