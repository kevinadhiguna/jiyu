const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['to-do', 'in-progress', 'completed'],
        default: 'to-do',
    },
});

const task = new mongoose.model('task', taskSchema);
module.exports = task;
