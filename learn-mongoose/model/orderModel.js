const mongoose = require('mongoose');

// A model to track orders in an application
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const order = mongoose.model('order', orderSchema);
module.exports = order;
