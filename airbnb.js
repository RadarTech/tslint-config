module.exports = {
  extends: [
    // Airbnb provides:
    //   -> tslint-consistent-codebase
    //   -> tslint-eslint-rules
    //   -> tslint-microsoft-contrib
    // https://github.com/progre/tslint-config-airbnb
    'tslint-config-airbnb'
  ],

  rules: {
    // Microsoft rules
    // https://github.com/Microsoft/tslint-microsoft-contrib
    'import-name': false,
    'variable-name': [true, 'allow-pascal-case'],
    'no-increment-decrement': false,
  }
}
