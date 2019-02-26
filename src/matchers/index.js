// @ts-check

// List of all available matchers
const modules = new Map([
	['node', require('./node')],

	// OSs
	['linux', require('./linux')],
	['windows', require('./windows')],
	['macos', require('./macos')]
]);

/**
 * @param {Array<string>} files
 */
module.exports = async function(files) {
	const ignore = [];

	for (const [name, run] of modules.entries()) {
		if (await run(files)) {
			ignore.push(name);
		}
	}

	return ignore;
};
