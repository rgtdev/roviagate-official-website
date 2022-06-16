
const asyncHandler = require("express-async-handler");
const Service = require("../models/Service");

// @desc    Get all Data
// @route   GET 
// @access  Private
exports.getService = asyncHandler(async (req, res) => {
    const service = await Service.find({});
  
    if (service) {
      res.json(service);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
});

// @desc    Get single data
// @route   GET Data
// @access  Private
exports.getServiceById = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id);
  
    if (service) {
      res.json(service);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
});

// @desc    Create new Data
// @route   POST Data
// @access  Private
exports.createService = asyncHandler(async (req, res) => {
    const {
        title,
        content,
        icon,
        entryDate
    } = req.body;
  
    const service = await Service.create({
        title,
        content,
        icon,
        entryDate
    });
  
    if (service) {
      res.status(201).json(service);
    } else {
      res.status(400);
      throw new Error("Invalid data");
    }
});

// @desc    Update Data
// @route   PUT Data
// @access  Private
exports.updateService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id);
  
    if (service) {
        service.title = req.body.title || service.title;
        service.content = req.body.content || service.content;
        service.icon = req.body.vision || service.icon;
        service.entryDate = req.body.entryDate;
    
        const updatedService = await service.save();
        
        res.json(updatedService);
    } else {
      res.status(404);
      throw new Error("Data not found");
    }
    
});
  
// @desc    Delete Data
// @route   DELETE Data
// @access  Private
exports.deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id);
  
    if (service) {
      await service.remove();
      res.json({ message: "Data was deleted successfully." });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
});
  

  