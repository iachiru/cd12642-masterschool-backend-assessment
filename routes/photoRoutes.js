const express = require("express");
const router = express.Router();
const {
  getAllPhotos,
  getPhotosById,
  getPhotosByUsername,
} = require("../controllers/photoController");

router.get("/", getAllPhotos);
router.get("/:id", getPhotosById);
router.get("/user/:username", getPhotosByUsername);
module.exports = router;
