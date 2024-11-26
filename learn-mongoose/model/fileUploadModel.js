const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
});
