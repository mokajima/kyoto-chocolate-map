module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true
  }
}
