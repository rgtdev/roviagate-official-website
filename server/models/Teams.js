
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    image: {type: String, default: "image/profile", required: true},
    socials: {
        facebook: {type: String, required: true},
        twitter: {type: String, required: true},
        instagram: {type: String, required: true}
    },    
    entryDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Team", teamSchema);