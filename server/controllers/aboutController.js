
const asyncHandler = require("express-async-handler");
const About = require("../models/About");

// @desc    Get all Data
// @route   GET 
// @access  Private
exports.getAbout = asyncHandler(async (req, res) => {
    const about = await About.find({});
  
    if (about) {
      res.json(about);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
});

// @desc    Get single data
// @route   GET Data
// @access  Private
exports.getAboutById = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id);
  
    if (about) {
      res.json(about);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
});

// @desc    Create new Data
// @route   POST Data
// @access  Private
exports.createAbout = asyncHandler(async (req, res) => {
    const {
        history,
        mission,
        entryDate
    } = req.body;
  
    const about = await About.create({
        history,
        mission,
        entryDate
    });
  
    if (about) {
      res.status(201).json(about);
    } else {
      res.status(400);
      throw new Error("Invalid data");
    }
});

// @desc    Update Data
// @route   PUT Data
// @access  Private
exports.updateAbout = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id);
  
    if (about) {
        about.history = req.body.history || about.history;
        about.mission = req.body.mission || about.mission;
        about.vision = req.body.vision || about.vision;
        about.entryDate = req.body.entryDate;
    
        const updatedAbout = await about.save();
        
        res.json(updatedAbout);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
    
});
  
// @desc    Delete Data
// @route   DELETE Data
// @access  Private
exports.deleteAbout = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id);
  
    if (about) {
      await about.remove();
      res.json({ message: "Data was deleted successfully." });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
});
  

  