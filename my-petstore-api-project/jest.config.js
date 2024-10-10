//need to configure jest to support ES modules 
//Using babel to 'transform' javascript into version compatible with diff browsers (old/new)
// jest.config.js
export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  };