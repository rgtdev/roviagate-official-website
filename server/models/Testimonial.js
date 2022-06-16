
const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String
});

module.exports = mongoose.model("Blog", TestimonialSchema);