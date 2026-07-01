const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Getting some error :", err);
    });
}

module.exports = connectDB