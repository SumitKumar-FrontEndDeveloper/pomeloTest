module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['html', 'json', 'text-summary', 'lcov'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/pages/**/*.{js,jsx,mjs}',
    '!src/util/**/*.{js,jsx,mjs}',
    '!src/shared/**/*.{js,jsx,mjs}',
    '!src/framework/**/*.{js,jsx,mjs}',
    '!src/reducers/index.{js,jsx,mjs}',
    '!src/store.{js,jsx,mjs}'
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/config//CSSStub.js`
  },
  setupFiles: ['<rootDir>/enzyme.setup.js', '<rootDir>/localStorage.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false
}
