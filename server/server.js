const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userController = require("./controllers/userController");

const PORT = 3000;
const app = express();

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`Connected to MongoDB at ${MONGO_URI}`))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use(express.json());

app.post("/login", userController.verifyUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: "successfully login",
  });
});
app.post("/signup", userController.createUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: "successfully signed up",
  });
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    success: false,
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: "An error occurred",
  };
  const errorObj = Object.assign({}, defaultErr, err);

  console.log(errorObj.log);
  return res.status(errorObj.status).json({
    success: errorObj.success,
    message: errorObj.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
