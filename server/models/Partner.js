
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    image: {type: String, required: true},
    url: {type: String, required: true, unique: true}
});

module.exports = mongoose.model("Blog", blogSchema);