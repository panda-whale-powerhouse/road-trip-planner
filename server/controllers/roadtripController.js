const Roadtrip = require('../models/roadtripModel');

const roadtripController = {};

roadtripController.createRoadtrip = async (req, res, next) => {
  console.log('Made it to RoadtripController!')
  console.log(req)
  const roadtripName = req.body.roadtripName;
  const creator = req.cookies.sessionId
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

module.exports = roadtripController;
