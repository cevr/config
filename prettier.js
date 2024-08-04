import sortImports from '@ianvs/prettier-plugin-sort-imports';

/** @type {import("prettier").Options} */
export const config = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: true,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		// formatting the package.json with anything other than spaces will cause
		// issues when running install...
		{
			files: ['**/package.json'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['**/*.mdx'],
			options: {
				// This stinks, if you don't do this, then an inline component on the
				// end of the line will end up wrapping, then the next save prettier
				// will add an extra line break. Super annoying and probably a bug in
				// prettier, but until it's fixed, this is the best we can do.
				proseWrap: 'preserve',
				htmlWhitespaceSensitivity: 'ignore',
			},
		},
	],
	plugins: [
		sortImports,
		'prettier-plugin-tailwindcss',
	],
	tailwindAttributes: ['class', 'className', 'ngClass', '.*[cC]lassName'],
	tailwindFunctions: ['clsx', 'cn'],
	importOrder: [
		// built-in modules include things like "fs", "http", etc.
		'<BUILTIN_MODULES>',
		'',
		// third-party modules include things like "lodash", "react", etc.
		'<THIRD_PARTY_MODULES>',
		'',
		// this is for absolute imports
		'^~/(.*)$',
		'',
		// relative imports
		'^[./]',
		'',
	],
};

// this is for backward compatibility
export default config;
