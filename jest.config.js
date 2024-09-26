module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest-setup.js'],
  globalTeardown: './jest-teardown.js',
  globalSetup: './jest-setup.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  transformIgnorePatterns: ['/node_modules/'],
};
