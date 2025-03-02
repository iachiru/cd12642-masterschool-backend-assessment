const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
