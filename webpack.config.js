const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
		/*new BundleAnalyzerPlugin(),*/
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
	},
}