/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', { 'endOfLine': 'auto' }], // règles de prettier
    'indent': ['error', 2], // 2 espaces pour l'indentation
    'semi': ['error', 'always'], // point-virgule obligatoire
    'arrow-spacing': ['error', { 'before': true, 'after': true }], // espaces autour des fonctions fléchées
    'no-console': 'error', // pas de console.log
    'max-len': ['error', { 'code': 100 }], // longueur de ligne max
  },
};


