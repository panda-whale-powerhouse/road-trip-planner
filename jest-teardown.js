const mongoose = require('mongoose');

module.exports = async (globalConfig) => {
  testServer.close();
  console.log('server has been closed');
  await mongoose.disconnect();
  console.log('database disconnected');
  testFrontEnd.stop();
};
