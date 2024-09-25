const Roadtrip = require('../models/roadtripModel');

const roadtripController = {};

roadtripController.createRoadtrip = async (req, res, next) => {
  const roadtripName = req.body.roadtripName;
  const creator = req.body.creator;
  const routeData = req.body.routeData;

  try {
    const createdTrip = await Roadtrip.create({
      roadtripName,
      public: false,
      creator,
      routeData,
    });
    console.log(createdTrip);
    return next();
  } catch (e) {
    console.log(e);
    return next({ error: e });
  }
};

module.exports = roadtripController;
