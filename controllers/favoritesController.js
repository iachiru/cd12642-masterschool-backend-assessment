//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
const FavPic = require("../models/favoritePhotoModel");

const addFavorites = asyncHandler(async (req, res) => {
  const { url, description, username, explanation } = req.body;

  if (!url || !description || !username || !explanation) {
    res.status(400);
    throw new Error("Please complete all fields");
  }

  const newFavorite = await FavPic.create({
    user: req.user.id,
    url,
    description,
    username,
    explanation,
  });
  res.status(200).json({ Message: "Added to favorites", newFavorite });
});

const getFavorites = asyncHandler(async (req, res) => {
  const favorites = await FavPic.find({ user: req.user.id });
  res.status(200).json(favorites);
});

const editFavorites = asyncHandler(async (req, res) => {
  const favorite = await FavPic.findById(req.params.id);

  if (!favorite) {
    res.status(400);
    throw new Error("Favorite not found");
  }

  const { explanation } = req.body;

  if (!explanation) {
    res.status(400);
    throw new Error("Explanation not found");
  }

  const updateFavorite = await FavPic.findByIdAndUpdate(
    req.params.id,
    { explanation },
    { new: true }
  );
  res.status(200).json(updateFavorite);
});

const deleteFavorites = asyncHandler(async (req, res) => {
  const favorite = await FavPic.findById(req.params.id);
  if (!favorite) {
    res.status(400);
    throw new Error("Favorite not found");
  }

  await favorite.remove();
  res.status(200).json({ id: req.params.id, message: "has been removed" });
});

module.exports = { addFavorites, getFavorites, editFavorites, deleteFavorites };
