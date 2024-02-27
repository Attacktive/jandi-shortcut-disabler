/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: ["eslint:recommended"],
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		es2017: true,
		node: true,
		jquery: true,
		webextensions: true
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest"
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_",
				"caughtErrorsIgnorePattern": "^_"
			}
		]
	}
};
