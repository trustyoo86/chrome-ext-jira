'use stirct';

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnotics: true,
    },
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'vue',
  ],
  transform: {
    '.*\\.(vue)$$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
};
