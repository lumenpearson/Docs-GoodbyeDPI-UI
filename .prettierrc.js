// Some settings are automatically inherited from .editorconfig
module.exports = {
	overrides: [
		{
			files: ".editorconfig",
			options: { parser: "yaml" },
		},
	],
	useTabs: true,
	printWidth: 80,
	tabWidth: 2,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "all",
	semi: true,
};
