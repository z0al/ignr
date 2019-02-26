// @ts-check

// Packages
const match = require('micromatch');

/**
 *
 * @param {Array<string>} files
 */
module.exports = async function(files) {
	// The pattern we test against
	const pattern = '**/package.json';

	// Try to find 'package.json' ?
	return match(files, pattern).length > 0;
};
