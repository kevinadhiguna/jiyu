const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String,
    },
    size: {
        type: Number,
    },
    uploadedBy: {
        type: mongoose.Schmea.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const fileUpload = mongoose.model('fileUpload', fileUploadSchema);
