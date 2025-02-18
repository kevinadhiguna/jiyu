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
    // Permissions are assigned per key, allowing fine-grained access control
    permissions: {
        type: [String], // e.g., ['read', 'write', 'admin']
        default: ['read']
    },
    // Expiration dates can be set to automatically invalidate old API keys
    expiresAt: {
        type: Date,
        default: () => Date.now() + 30*24*60*60*1000, // Default expiration: 30 days
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const apiKey = mongoose.Model('apiKey', apiKeySchema);
module.exports = apiKey;
