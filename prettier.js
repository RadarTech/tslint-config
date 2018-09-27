module.exports = {
  extends: [
    // Disables rules that would interfere with Prettier-enforced codestyle.
    'tslint-config-prettier',
  ],

  rulesDirectory: [
    // Plugs Prettier into TSLint workflow & enables Prettier-based auto-fixing.
    // https://github.com/ikatyang/tslint-plugin-prettier
    'tslint-plugin-prettier',
  ],

  rules: {
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
  }
}
