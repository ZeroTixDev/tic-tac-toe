const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const plugins = [
	new HtmlWebpackPlugin({
		hash:true,
		title:'Tic Tac Toe',
		template: './src/template.html',
		filename: './index.html',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
		}
	}), new CleanWebpackPlugin(['dist'])  ,
	/*new BundleAnalyzerPlugin(),*/
]
module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: '[name].[contenthash].js',
		// eslint-disable-next-line no-undef
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
	plugins,
	devServer: {
		// eslint-disable-next-line no-undef
		contentBase: path.join(__dirname, 'dist'),
	},
}