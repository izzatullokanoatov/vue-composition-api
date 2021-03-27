module.exports = {
  root: true,

  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ]
}
