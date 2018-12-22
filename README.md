# ivan-ha/generator-ivan-js

My Yeoman generator to create project scaffolding for JS Web application build with React, Redux, Redux-Saga, Flow, Ramda, Jest.

It includes configure JS linting, formatting, deploy using gh-pages, etc.

## Installation

**(Recommended) Without globally installed packages**
```sh
npx -p yo -p generator-ivan-js -c "yo ivan-js"
```

**With globally installed packages**
```sh
npm install -g yo
npm install -g generator-ivh-react-component
yo ivan-js
```

## What's in the Box

### Commit linting

Implement [Conventional Commits](https://www.conventionalcommits.org) via [`commitlint`](https://github.com/marionebl/commitlint), to adhere to commit convention, and auto run on every commit.

Check out the config in [`.commitlintrc.json`](https://github.com/ivan-ha/generator-ivan-js/blob/master/generators/app/templates/.commitlintrc.json).

### Code linting

Integrated [ESLint](https://eslint.org/) as the JS linter. And added the following plugins:
'eslint-config-prettier',
- [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype)
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`eslint-plugin-ramda`](https://github.com/ramda/eslint-plugin-ramda)
- [`eslint-plugin-react-redux`](https://github.com/DianaSuvorova/eslint-plugin-react-redux)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-redux-saga`](https://github.com/pke/eslint-plugin-redux-saga)

Check out the config in [`.eslintrc.yml`](https://github.com/ivan-ha/generator-ivan-js/blob/master/generators/app/templates/.eslintrc.yml).

### Deployment

Support deploy static to [GitHub project page](https://help.github.com/articles/user-organization-and-project-pages/) via [gh-pages](https://github.com/tschaub/gh-pages).

To deploy
```sh
yarn deploy
```

Note that default settings:
1. static are built with `yarn build`
2. build files are located in `{projectRoot}/build`

Please config the `pre-deploy` hook and `deploy` command if that's not your case.

### Version bumping

```sh
yarn bump-version
```

Implemented via [`standard-version`](https://github.com/conventional-changelog/standard-version), which commit messages are required to align with [Conventional Commits](https://www.conventionalcommits.org).

### Import sorting

Implemented via [`import-sort`](https://github.com/renke/import-sort), and configured to the [`import-sort-style-module`](https://github.com/renke/import-sort/tree/master/packages/import-sort-style-module).

Automatically run on commit hook.
