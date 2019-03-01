// @ts-check

let cmd = jest.genMockFromModule('command-exists');

let commands = [];

cmd = function(cmd) {
	return commands[cmd];
};

cmd.__setCommand = (cmd, flag) => {
	commands[cmd] = flag;
};

module.exports = cmd;
