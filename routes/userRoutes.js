const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/userController");
//user can sign up for aplication
// POST

router.post("/", signUp);

module.exports = router;
