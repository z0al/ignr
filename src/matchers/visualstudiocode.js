// @ts-check

// Packages
const exists = require('command-exists');

/**
 *
 * @param {Array<string>} files
 * @returns {Promise<Boolean>}
 */
module.exports = async function(files) {
	// @ts-ignore
	return await exists('code');
};
