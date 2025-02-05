const mongoose = require('mongoose');

const privacyConsentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    consentType: {
        type: String, // e.g.: "data_collection", "cookies", "marketing"
        required: true,
    },
    granted: {
        type: Boolean,
        required: true,
    },
});

const privacyConsent = mongoose.model('privacyConsent', privacyConsentSchema);
module.exports = privacyConsent;
