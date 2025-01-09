const mongoose = require('mongoose');

// A model to manage teams
const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    stats: {
        wins: { type: Number, default: 0 },
        losses: { type: Number, default: 0 },
        draw: { type: Number, default: 0 },
    },
}, {
    timestamp: true,
});

const team = mongoose.model('team', teamSchema);
module.exports = team;
