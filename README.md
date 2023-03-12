# About

A Webpack starter project for using SCSS and Webpack.

## Usage

Get up and running with these simple steps:

1. Clone the project

```bash
git clone git@github.com:petrosAth/webpack-starter.git ./project-name
```

2. Get in the project's directory and install npm dependencies

```bash
cd project-name
npm install
```

3. Install ESLint

```bash
npm init @eslint/config
```

4. Modify Neovim project configuration file and restart Neovim

```bash
nvim .nvim/init.local.lua
```

4. Run `npm run dev`

## Plugins and tools

- [`Babel`](https://github.com/babel/babel)
  - [`Babel preset-env`](https://babeljs.io/docs/babel-preset-env.html): Enables
    the use of the latest JavaScript without needing to micromanage which syntax
    transforms (and optionally, browser polyfills) are needed by the target
    environment
- [`SASS`](https://sass-lang.com/): It is a CSS extension that is used to add
  features like variables, nested rules, mixins, inline imports, inheritance and
  more, all with fully CSS-compatible syntax.
- [`PostCSS`](https://postcss.org/)
  - [`PostCSS Preset Env`](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env):
    Enables the use of the latest CSS features by modifying the end CSS code to
    ensure browser compatibility
  - [`Autoprefixer`](https://github.com/postcss/autoprefixer): Automatically add
    vendor prefixes in CSS to ensure browser compatibility
- [`Webpack Bundle Analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer):
  Visualize size of webpack output files with an interactive zoomable treemap
- [`Webpack Dev Server`](https://github.com/webpack/webpack-dev-server): Serves
  the webpack app/website and provides live browser reloading on file changes
- [`ESLint`](https://eslint.org): Linter that statically analyzes the JavaScript
  code to quickly find problems
