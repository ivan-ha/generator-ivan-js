var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  install() {
    this.yarnInstall([
      '@commitlint/cli',
      '@commitlint/config-conventional',
      'eslint',
      'eslint-config-prettier',
      'eslint-plugin-flowtype',
      'eslint-plugin-import',
      'eslint-plugin-jest',
      'eslint-plugin-prettier',
      'eslint-plugin-ramda',
      'eslint-plugin-react-redux',
      'eslint-plugin-react',
      'eslint-plugin-redux-saga',
      'gh-pages',
      'husky',
      'import-sort-cli',
      'import-sort-parser-babylon',
      'import-sort-style-module',
      'lint-staged',
      'prettier',
      'standard-version',
    ], { 'dev': true });
  }
};