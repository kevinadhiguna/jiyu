const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const task = mongoose.model('Task', taskSchema);
module.exports = task;
