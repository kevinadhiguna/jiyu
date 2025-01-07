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
});

const team = mongoose.model('team', teamSchema);
module.exports = team;
