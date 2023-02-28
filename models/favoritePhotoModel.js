const mongoose = require("mongoose");

const favoritePhotoSchema = mongoose.Schema({
  user: { type: String }, //API user ID
  url: { type: String }, //raw photo URL
  description: {
    type: String,
  }, // photo´s description
  username: {
    type: String,
  }, // user that uploaded the photo
  explanation: {
    type: String,
  },
});

module.exports = mongoose.model("FavPic", favoritePhotoSchema);
