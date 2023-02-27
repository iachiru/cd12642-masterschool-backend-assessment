const mongoose = require("mongoose");

const favoritePhotoSchema = mongoose.Schema({
  user: { type: String, required: [true] }, //API user ID
  url: { type: String, required: [true] }, //raw photo URL
  description: {
    type: String,
    required: [true],
  }, // photo´s description
  username: {
    type: String,
    required: [true],
  }, // user that uploaded the photo
});

module.exports = mongoose.model("FavPic", favoritePhotoSchema);
