const express = require("express");
const router = express.Router();
const {
  getAllPhotos,
  getPhotosById,
} = require("../controllers/photoController");

router.get("/", getAllPhotos);
router.get("/:id", getPhotosById);
module.exports = router;
