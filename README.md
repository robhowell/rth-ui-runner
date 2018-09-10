# rth-ui-runner

## Background

- [Commander](https://www.npmjs.com/package/commander) handles arguments and commands.
- [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin) provides the friendly Webpack output that all the cool kids are using these days.
- [Webpack 4 Tutorial: from 0 Conf to Production Mode](https://www.valentinog.com/blog/webpack-tutorial/) is a great starter guide for using Webpack 4.

## Improvements

- Use `style-loader` in dev and [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) in production
- Add [duplicate-package-checker-webpack-plugin](https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin)
- Enable HMR:
  - [HotModuleReplacementPlugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/)
  - [Hot reload all the things!](https://hackernoon.com/hot-reload-all-the-things-ec0fed8ab0)
  - [react-hot-loader](https://github.com/gaearon/react-hot-loader)
  - [Hot reloading with create-react-app without ejecting](https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642)
  - [Webpack HMR vs React-Hot-Loader](https://blog.isquaredsoftware.com/2017/08/blogged-answers-webpack-hmr-vs-rhl/)


## Later

- Add ability to analyze bundle with [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)