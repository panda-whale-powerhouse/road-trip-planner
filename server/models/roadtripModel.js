const mongoose = require('mongoose');

const roadtripSchema = new mongoose.Schema({
  roadtripName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // If we add a feature where people can view all routes where public = true
  public: {
    type: Boolean,
    default: false,
  },
  tripData: {},
});

const Roadtrip = mongoose.model('Roadtrip', roadtripSchema);

module.exports = Roadtrip;
