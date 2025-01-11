const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

const task = new mongoose.model('task', taskSchema);
module.exports = task;
