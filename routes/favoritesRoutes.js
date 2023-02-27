const express = require("express");
const router = express.Router();

const { getFavorites } = require("../controllers/favoritesController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getFavorites);

module.exports = router;
