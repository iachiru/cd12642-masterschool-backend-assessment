//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

//Create new user
//route POST/api/register
//access Public

const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ username, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json({ message: "Register User" });
});

const logIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const passComparison = await bcrypt.compare(password, user.password);

  if (user && passComparison) {
    res.status(200).json({
      _id: user.id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  return res.status(200).json({ id: _id, username, email });
});

const logOut = asyncHandler(async (req, res) => {
  req.user.deleteToken(req.token, (error, user) => {
    if (error) return res.status(400).send(error);
    res.sendStatus(200);
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
module.exports = { signUp, logIn, logOut, getMe };
