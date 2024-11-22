const mongoose = require('mongoose');

// Session for login
const sessionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const session = mongoose.model('Session', sessionSchema);
