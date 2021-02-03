'use strict';

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const jsdoc2md = require('jsdoc-to-markdown');

/* input and output paths */
const inputFile = 'lib/**.js';
const outputDir = path.resolve(__dirname, 'docs');

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: inputFile });

/* reduce templateData to an array of class names */
const moduleNames = templateData.reduce((acum, identifier) => {
	if(identifier.kind === 'module')
		acum.push(identifier.name);
	return acum;
}, []);

/* create a documentation file for each module */
for(const moduleName of moduleNames) {
	const template = `{{#module name="${moduleName}"}}{{>docs}}{{/module}}`;
	const output = jsdoc2md.renderSync({ data: templateData, template });
	fs.writeFileSync(path.resolve(outputDir, `${moduleName}.md`), output);
}

const indexPage = `See documentation for each module:

${moduleNames.map(moduleName => `- [${moduleName}](${moduleName}.md)`).join('\n')}
`;

fs.writeFileSync(path.resolve(outputDir, 'README.md'), indexPage);
