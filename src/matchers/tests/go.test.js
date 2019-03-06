// @ts-check

// Ours
const matcher = require('../go');

describe('go', () => {
	it('matches when a go.mod exists', async () => {
		const files = ['go.mod'];
		expect(await matcher(files)).toEqual(true);
	});

	it('matches when a Go file exists', async () => {
		let files = ['src/main.go'];
		expect(await matcher(files)).toEqual(true);
	});
});
