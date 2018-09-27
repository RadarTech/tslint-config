module.exports = {
  extends: [
    // Airbnb provides:
    //   -> tslint-consistent-codebase
    //   -> tslint-eslint-rules
    //   -> tslint-microsoft-contrib
    // https://github.com/progre/tslint-config-airbnb
    'tslint-config-airbnb',

    '@0xproject/tslint-config',

    // Disables rules that would interfere with Prettier-enforced codestyle.
    'tslint-config-prettier',
  ],

  rulesDirectory: [
    // Plugs Prettier into TSLint workflow & enables Prettier-based auto-fixing.
    // https://github.com/ikatyang/tslint-plugin-prettier
    'tslint-plugin-prettier',
  ],

  rules: {
    // Core TSLint rules
    // https://palantir.github.io/tslint/rules/
    'no-submodule-imports': false,
    'ordered-imports': true,
    'strict-boolean-expressions': false,
    'prefer-function-over-method': false,

    // Microsoft rules
    // https://github.com/Microsoft/tslint-microsoft-contrib
    'import-name': false,
    'variable-name': [true, 'allow-pascal-case'],
    'no-increment-decrement': false,

    // Prettier rules
    // https://github.com/alexjoverm/tslint-config-prettier
    prettier: [true, {
      printWidth: 80,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      jsxBracketSameLine: true
    }],

    // ESLint rules for TSLint
    // https://github.com/buzinas/tslint-eslint-rules
    // rules go here...

    // Consistent codestyle rules
    // https://github.com/ajafff/tslint-consistent-codestyle
    // rules go here...
  }
}
