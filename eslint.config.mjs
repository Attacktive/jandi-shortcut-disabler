import js from "@eslint/js";
import ts from "typescript-eslint";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		ignores: ["dist/"]
	}
];
