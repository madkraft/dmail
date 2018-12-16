module.exports = {
  roots: ['<rootDir>/src'],
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
  transform: {
    '^.+\\.tsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
