
// Required PACKAGES
const express = require("express");
const router = express.Router();
const { getProject, createProject, getProjectById, updateProject, deleteProject } = require("../controllers/projectsController");

// initialize officers routes
router.route("/projects").get(getProject).post(createProject);

router
  .route("/projects/:id")
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;