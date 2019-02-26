// @ts-check

// Ours
const matcher = require('../node');

describe('node', () => {
	it('matches only when a package.json exists', async () => {
		const files = ['package.json'];
		expect(await matcher(files)).toEqual(true);

		const fake = ['.pachage.json', 'fakepackage.json', 'pachage.jso'];
		expect(await matcher(fake)).toEqual(false);
	});
});
