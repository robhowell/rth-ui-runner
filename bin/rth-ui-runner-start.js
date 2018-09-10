const path = require('path');
const run = require('./run');

const webpackConfigPath = path.join(__dirname, '../webpack.config.js');

run(`npx webpack-dev-server --config ${webpackConfigPath} --mode development --open`);
