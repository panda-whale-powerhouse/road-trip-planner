const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const userController = require('./controllers/userController');
const roadtripController = require('./controllers/roadtripController');

const PORT = 3000;
const app = express();

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`Connected to MongoDB at ${MONGO_URI}`))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

app.use(express.json());
app.use(cookieParser());

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

app.post('/roadtrips', roadtripController.createRoadtrip, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'successfully created new trip',
  });
});

// used to try to get around broswer's cross origin issues on frontend
// only seems to work with :param syntax?

app.get('/corsproxy/:url', async (req, res, next) => {
  try {
    console.log('1');
    const fetch_url = `${req.query.url}?key=${
      req.query.key
    }&origin=${req.query.origin.replace(
      ' ',
      '+'
    )}&destination=${req.query.destination.replace(' ', '+')}${
      req.query.waypoints ? '&waypoints=' + req.query.waypoints : ''
    }`;
    console.log('2');
    const response = await fetch(fetch_url);
    console.log('3', response);
    const data = await response.json();
    console.log('4', data);
    return res
      .status(200)
      .setHeader('Access-Control-Allow-Origin', '*') // all this is to set this header on the response to the browser
      .setHeader('Access-Control-Allow-Origin', '*') // all this is to set this header on the response to the browser
      .json(data);

    //
  } catch (error) {
    return next({
      success: false,
      log: 'CORS-Proxy: ' + error,
      status: 500,
      message: 'An Proxy error occurred',
    });
  }
});

app.use((req, res) => res.status(404).send('404, page not here man.'));

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

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
