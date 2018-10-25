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

  writing() {
    // copy entire templates directory
    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath(),
      { globOptions: { dot: true } }
    );

    const pkgJson = {
      scripts: {
        "bump-version": "standard-version --skip.commit=true --skip.tag=true",
        "deploy": "gh-pages -d build"
      },
      husky: {
        hooks: {
          "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
          "pre-commit": "lint-staged"
        }
      }
    }

    // extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }
};