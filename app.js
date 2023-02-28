const express = require("express");
const dotenv = require("dotenv").config();
const axios = require("axios");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the Unsplash API!" });
});

app.use("/api/photos", require("./routes/photoRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/favorites", require("./routes/favoritesRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
