// @ts-check

// Ours
const matcher = require('../node');

describe('node', () => {
	it('matches when a package.json exists', async () => {
		const files = ['package.json'];
		expect(await matcher(files)).toEqual(true);

		const fake = ['.pachage.json', 'fakepackage.json', 'pachage.jso'];
		expect(await matcher(fake)).toEqual(false);
	});

	it('matches when a JavaScript file exists', async () => {
		let files = ['package.js'];
		expect(await matcher(files)).toEqual(true);

		files = ['something.mjs'];
		expect(await matcher(files)).toEqual(true);

		files = ['src/something.jsx'];
		expect(await matcher(files)).toEqual(true);
	});

	it('matches when a TypeScript file exists', async () => {
		let files = ['src/package.ts'];
		expect(await matcher(files)).toEqual(true);

		files = ['src/package.tsx'];
		expect(await matcher(files)).toEqual(true);
	});
});
