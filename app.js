const express = require("express");
const dotenv = require("dotenv").config();
const axios = require("axios");
const app = express();
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the Unsplash API!" });
});

app.use("/api/photos", require("./routes/photoRoutes"));
app.use("/api/register", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
