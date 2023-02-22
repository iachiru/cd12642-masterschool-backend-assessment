//Require axios to make API calls
const axios = require("axios");
const accessKey = process.env.UNSPLASH_ACCESS_KEY;
const apiUrl = `https://api.unsplash.com/photos/`;
const clientAccess = `?client_id=${accessKey}`;

const getAllPhotos = async (req, res) => {
  try {
    const response = await axios.get(apiUrl + clientAccess);
    const images = response.data;
    const rawImg = images.map((img) => img.urls.raw);

    return res.status(200).json(rawImg);
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Server error. Please try again later." });
  }
};

const getPhotosById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(apiUrl + id + clientAccess);
    const images = response.data;

    res.status(200).json(images);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Server error. Please try again later." });
  }
};
module.exports = { getAllPhotos, getPhotosById };
