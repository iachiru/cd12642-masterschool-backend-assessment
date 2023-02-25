const express = require("express");
const router = express.Router();
const {
  signUp,
  logIn,
  logOut,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
//user can sign up for aplication
// POST

router.post("/register", signUp);
router.post("/login", logIn);
router.get("/logout", protect, logOut);
router.get("/me", protect, getMe);

module.exports = router;
