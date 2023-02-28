const express = require("express");
const router = express.Router();

const {
  addFavorites,
  getFavorites,
  editFavorites,
  deleteFavorites,
} = require("../controllers/favoritesController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getFavorites);
router.post("/", protect, addFavorites);
router.put("/:id", protect, editFavorites);
router.delete("/:id", protect, deleteFavorites);

module.exports = router;
