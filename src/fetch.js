// @ts-check

// Packages
const request = require('got');

module.exports = function(query) {
	return request.stream(`https://gitignore.io/api/${query}`);
};
