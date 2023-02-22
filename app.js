const express = require("express");
const dotenv = require("dotenv").config();
const axios = require("axios");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the Unsplash API!" });
});

/* const URL = "https://api.unsplash.com/photos";

const getPhotos = async () => {
  const response = await fetch(URL);
  console.log(response);
}; */

app.use("/api/photos", require("./routes/photoRoutes"));

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
