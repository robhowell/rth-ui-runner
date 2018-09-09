const { spawn } = require('child_process');

const run = commandWithArgsString => {
  const commandWithArgs = commandWithArgsString.split(' ');
  const [command, ...args] = commandWithArgs;
  spawn(command, args, { shell: true, stdio: 'inherit' });
};

module.exports = run;
