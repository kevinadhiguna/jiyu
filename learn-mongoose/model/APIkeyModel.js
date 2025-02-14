const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const apiKey = mongoose.Model('apiKey', apiKeySchema);
module.exports = apiKey;
