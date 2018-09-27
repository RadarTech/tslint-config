module.exports = {
  extends: [
    './airbnb.js',
    './prettier.js',
  ],

  rules: {
    // Core TSLint rules
    // https://palantir.github.io/tslint/rules/
    'no-submodule-imports': false,
    'ordered-imports': true,
    'strict-boolean-expressions': false,
    'prefer-function-over-method': false,
  }
}
