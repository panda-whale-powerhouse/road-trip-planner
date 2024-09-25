module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest-setup.js'],
  globalTeardown: './jest-teardown.js',
  globalSetup: './jest-setup.js',
};
