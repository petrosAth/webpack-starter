# About

A starter project boilerplate for using SCSS and
(Webpack)[https://webpack.js.org/].

> At its core, webpack is a static module bundler for modern JavaScript
> applications. When webpack processes your application, it internally builds a
> dependency graph from one or more entry points and then combines every module
> your project needs into one or more bundles, which are static assets to serve
> your content from.

## Usage

Get up and running with these simple steps:

> Don't forget to substitute `project-name` with your project's name

1. Clone the project

```bash
git clone git@github.com:petrosAth/webpack-starter.git `project-name`
```

2. Get in the project's directory and install npm dependencies

```bash
cd `project-name`
npm install
```

3. Modify Neovim project configuration file and restart Neovim

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
- [`PostCSS`](https://postcss.org/): A tool for transforming CSS with JavaScript
  - [`PostCSS Preset Env`](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env):
    Enables the use of the latest CSS features by modifying the end CSS code to
    ensure browser compatibility
  - [`Autoprefixer`](https://github.com/postcss/autoprefixer): Automatically add
    vendor prefixes in CSS to ensure browser compatibility
- [`Webpack Bundle Analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer):
  Visualize size of webpack output files with an interactive zoomable treemap
- [`Webpack Dev Server`](https://github.com/webpack/webpack-dev-server): Serves
  the webpack app and provides live browser reloading on file changes
- [`ESLint`](https://eslint.org): Linter that statically analyzes the JavaScript
  code to quickly find problems

---

This project is based on Grant Barlett's
[React TypeScript Webpack Starter](https://github.com/GrantBartlett/react-typescript-webpack-starter)
