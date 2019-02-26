// @ts-check

// Packages
const fs = require('fs');
const path = require('path');
const ora = require('ora');

// Ours
const ignore = require('./ignore');
const fetch = require('./fetch');

const spinner = ora();
const dir = process.cwd();

spinner.start('Matching');

ignore(dir)
	.then(ids => {
		spinner.succeed(`Found: ${ids.join(', ')}`);
		return ids.join(',');
	})
	.then(query => {
		spinner.start('Generating a .gitignore for you :)');

		const file = path.resolve(dir, '.gitignore');

		fetch(query)
			// Handle errors
			.on('error', () => {
				spinner.fail(`Failed to get data from https://gitignore.io, Aborting.`);
			})
			// Write to file
			.pipe(fs.createWriteStream(file))
			.on('close', () => {
				spinner.succeed('The magic has worked 🦄');
			});
	});
