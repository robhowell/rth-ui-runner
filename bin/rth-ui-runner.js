#!/usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');

program
  .version(version)
  .command('start', 'Start the development server (start file: src/index.js)')
  .command('build', 'Create a production build, output to the dist/ directory')
  .command('lint', 'Run linting on src/ folder')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
