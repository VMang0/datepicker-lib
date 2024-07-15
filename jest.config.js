module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@type/(.*)$': '<rootDir>/src/type/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  setupFiles: ['jest-localstorage-mock'],
};
