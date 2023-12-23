const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		contentScript: path.resolve(__dirname, "..", "src", "contentScript.ts"),
		inject: path.resolve(__dirname, "..", "src", "inject.ts")
	},
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "[name].js"
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	optimization: {
		minimize: false
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ context: "public", from: ".", to: "." }]
		})
	]
};
