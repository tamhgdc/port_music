module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    // '@vue/standard',
    'eslint:recommended',
    // 'plugin:vue/recommended'
  ],

  rules: {
    indent: 0,
    'vue/html-self-closing': 'off',
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-unused-vars': 'off',
    // 'no-unused-labels': 'off'
  }
}
