// @ts-check

// Ours
const linux = require('../linux');
const windows = require('../windows');
const macos = require('../macos');

describe('OSs', () => {
	test('they always matche', async () => {
		expect(await linux([])).toEqual(true);
		expect(await windows([])).toEqual(true);
		expect(await macos([])).toEqual(true);
	});
});
