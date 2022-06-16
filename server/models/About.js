
const mongoose = require('mongoose');

const aboutSchema =new mongoose.Schema({
    history: {type: String, required: true},
    mission: {type: String, required: true},
    vision: {type: String, required: true},
    entryDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model("About-us", aboutSchema);