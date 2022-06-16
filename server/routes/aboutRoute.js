
// Required PACKAGES
const express = require("express");
const router = express.Router();
const { getAbout, createAbout, getAboutById, updateAbout, deleteAbout } = require("../controllers/aboutController");

// initialize officers routes
router.route("/about").get(getAbout).post(createAbout);

router
  .route("/about/:id")
  .get(getAboutById)
  .put(updateAbout)
  .delete(deleteAbout);

module.exports = router;