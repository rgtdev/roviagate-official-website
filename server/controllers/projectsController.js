
const asyncHandler = require("express-async-handler");
const Project = require("../models/Project");

// @desc    Get all Data
// @route   GET 
// @access  Private
exports.getProject = asyncHandler(async (req, res) => {
    const project = await Project.find({});
  
    if (project) {
      res.json(project);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
});

// @desc    Get single data
// @route   GET Data
// @access  Private
exports.getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
  
    if (project) {
      res.json(project);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
});

// @desc    Create new Data
// @route   POST Data
// @access  Private
exports.createProject = asyncHandler(async (req, res) => {
    const {
        title,
        content,
        image,
        entryDate
    } = req.body;
  
    const project = await Project.create({        
        title,
        content,
        image,
        entryDate
    });
  
    if (project) {
      res.status(201).json(project);
    } else {
      res.status(400);
      throw new Error("Invalid data");
    }
});

// @desc    Update Data
// @route   PUT Data
// @access  Private
exports.updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
        project.title = req.body.title || project.title;
        project.content = req.body.content || project.content;
        project.image = req.body.image || project.image;
        project.entryDate = req.body.entryDate;
    
        const updatedProject = await project.save();
        
        res.json(updatedProject);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
    
});
  
// @desc    Delete Data
// @route   DELETE Data
// @access  Private
exports.deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
  
    if (project) {
      await project.remove();
      res.json({ message: "Data was deleted successfully." });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
});
  

  