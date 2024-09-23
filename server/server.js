const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const port = 8086;
const userController = require('./controllers/userController');
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log(`Connected to MongoDB at ${mongoURI}`))
  .catch(err => console.error('Failed to connect to MongoDB', err));
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, '../../frontend/vite-app/dist/')));
app.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json({
    success: true, 
    message: 'successfully login',
  });
});
app.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json({
    success: true, 
    message: 'successfully signed up',
  });
});


// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../../frontend/vite-app/dist/index.html'));
// });
//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    success: false,
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: 'An error occurred',
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json({
    success: errorObj.success,
    message: errorObj.message
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
