const express = require("express");
const router = express.Router();

const {
  addFavorites,
  getFavorites,
  editFavorites,
  deleteFavorites,
} = require("../controllers/favoritesController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getFavorites).post(protect, addFavorites);

router
  .route("/:id")
  .put(protect, editFavorites)
  .delete(protect, deleteFavorites);

module.exports = router;
