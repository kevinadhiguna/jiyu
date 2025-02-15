const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // API keys are randomly generated and secured
    key: {
        type: String,
        required: true,
        unique: true,
        // Generate a random API key
        default: () => crypto.randomBytes(32).toString('hex'),
    },
});

const apiKey = mongoose.Model('apiKey', apiKeySchema);
module.exports = apiKey;
