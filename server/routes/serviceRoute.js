
// Required PACKAGES
const express = require("express");
const router = express.Router();
const { getService, createService, getServiceById, updateService, deleteService } = require("../controllers/servicesController");

// initialize officers routes
router.route("/services").get(getService).post(createService);

router
  .route("/services/:id")
  .get(getServiceById)
  .put(updateService)
  .delete(deleteService);

module.exports = router;