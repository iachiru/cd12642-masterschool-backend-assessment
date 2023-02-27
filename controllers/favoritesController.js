//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
const FavPic = require("../models/favoritePhotoModel");

const getFavorites = asyncHandler(async (req, res) => {
  res.send({ message: "here are your faves" });
});

module.exports = { getFavorites };
