module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'], // links to normal "configure({ adapter: new Adapter() })" stuff.

  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // ignores test files in .next(js) & node modules

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // anything .js is babel'd for jest to consume
    '^.+.(css|styl|less|sass|scss|png|jpg|svg|mp3|ttf|woff|woff2)$': 'jest-transform-stub', // anything style related is ignored and mapped to jest-transform-stub module
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/EmptyModule.js', // <-- had to pop this in the following day to get any separetly imported .css files mapped to an empty module / object. So if i try to do import 'react-style-module/styles/my-styles.css' it would fail, though 'import './styles.css' worked. Now with this mapped correctly also, everything is imported/mapped/passing successfully.
  },
  testEnvironment: 'jsdom',
};
