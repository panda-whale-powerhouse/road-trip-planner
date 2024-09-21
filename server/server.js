const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const port = 8086;
const userController = require('./controllers/userController');
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log(`Connected to MongoDB at ${mongoURI}`))
  .catch((err) => console.error('Failed to connect to MongoDB', err));
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, '../../frontend/vite-app/dist/')));
app.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'successfully login',
    data: res.locals.currentUser,
  });
});
app.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'successfully signed up',
    data: res.locals.user,
  });
});

// used to try to get around broswer's cross origin issues on frontend
app.get('/corsproxy/:url', async (req, res, next) => {
  try {
    const response = await fetch(req.params.url);
    const data = await response.json();
    return res
      .status(200)
      .setHeader('Access-Control-Allow-Origin', '*')
      .json(data);
  } catch (error) {
    return next({
      success: false,
      log: 'CORS-Proxy: ' + error,
      status: 500,
      message: 'An Proxy error occurred',
    });
  }
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
    message: errorObj.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
