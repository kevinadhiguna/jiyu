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
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const fileUpload = mongoose.model('fileUpload', fileUploadSchema);
