// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:prettier/recommended',
    'prettier/standard',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": [0, "always-multiline"],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'arrow-parens': 0,

    'semi': [0, 'never'],
    'space-before-function-paren': 0,
    "no-unused-vars": 1,
    "no-trailing-spaces": 0,
    "object-property-newline": 0,
    "spaced-comment": 0,
    "no-constant-condition": 0,
    "no-multiple-empty-lines": 0,
    "no-unreachable": 0,
    "camelcase": 0,
    "no-undef": 1,
    "one-var": 1,//连续声明
    "no-tabs": "off",
    "indent": [1, 2]
  }
}
