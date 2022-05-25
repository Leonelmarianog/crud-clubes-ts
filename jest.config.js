module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  rootDir: 'src',
  coverageDirectory: './coverage/',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist'],
};
