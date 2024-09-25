const Roadtrip = require('../models/roadtripModel');

const roadtripController = {};

roadtripController.createRoadtrip = async (req, res, next) => {
  console.log('Made it to RoadtripController!');
  console.log(req);
  const roadtripName = req.body.roadtripName;
  const creator = req.cookies.sessionId;
  const tripData = req.body.tripData;

  try {
    const createdTrip = await Roadtrip.create({
      roadtripName,
      public: false,
      creator,
      tripData,
    });
    console.log(createdTrip);
    return next();
  } catch (e) {
    console.log(e);
    return next({ error: e });
  }
};

roadtripController.getUserRoadtrips = async (req, res, next) => {
  console.log('Retrieving list of roadtrips for user ', req.cookies.sessionId);
  if (!req.cookies.sessionId) {
    return next({ error: 'User must be logged in to save a roadtrip.' });
  }

  try {
    const listOfRoadtrips = await Roadtrip.find({
      creator: req.cookies.sessionId,
    });
    res.locals.roadtrips = listOfRoadtrips;
    return next();
  } catch (e) {
    return next({ log: e.toString() });
  }
};

module.exports = roadtripController;
