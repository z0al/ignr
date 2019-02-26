// Packages
const glob = require('globby');

// Ours
const matchers = require('./matchers');

/**
 *
 * @param {string} path
 */
async function ignore(path) {
	// List all folders/files in that path
	const files = await glob('**', {
		cwd: path,
		// Respect .gitignore files
		gitignore: true
	});

	return await matchers(files);
}
