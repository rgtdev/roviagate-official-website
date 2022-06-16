
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    icon: {type: String, default: "icon", required: true},
    entryDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Service", serviceSchema);