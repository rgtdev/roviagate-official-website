
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String, default: "Images", required: true},
    entryDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Project", projectSchema);