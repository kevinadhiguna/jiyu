const mongoose = require('mongoose');

// A model to track inventory in a warehouse or manufacturing system
const inventorySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    warehouseLocation: {
        type: String,
        required: true,
    },
    quantityInStock: {
        type: Number,
        required: true,
    },
    lastRestocked: {
        type: Date,
        default: Date.now,
    },
    supplier: {
        type: String,
        // required: true,
    },
}, {
    timestamps: true,
});

const inventory = mongoose.model('inventory', inventorySchema);
module.exports = inventory;
