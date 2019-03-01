// @ts-check

jest.mock('command-exists');

// Packages
const cmd = require('command-exists');

// Ours
const vim = require('../vim');
const vscode = require('../visualstudiocode');

describe('Editors', () => {
	test('vim', async () => {
		// @ts-ignore
		cmd.__setCommand('vim', true);
		expect(await vim([])).toBe(true);

		// @ts-ignore
		cmd.__setCommand('vim', false);
		expect(await vim([])).toBe(false);
	});

	test('visualstudiocode', async () => {
		// @ts-ignore
		cmd.__setCommand('code', true);
		expect(await vscode([])).toBe(true);

		// @ts-ignore
		cmd.__setCommand('code', false);
		expect(await vscode([])).toBe(false);
	});
});
