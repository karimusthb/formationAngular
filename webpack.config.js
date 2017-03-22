'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
	entry: {
		'bundle': './app/app.js'
	},
	output: {
		path: path.resolve('./wpk'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader?minimize&sourceMap"
			})
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader?minimize&sourceMap!sass-loader?sourceMap"
			})
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: ['babel-loader', 'ng-annotate-loader']
		}, {
			test: /\.html$/,
			use: [{
				loader: 'ngtemplate-loader',
				options: {
					relativeTo: 'app'
				}
			}, {
				loader: 'html-loader',
				options: {
					attrs: 'img-svg:src',
					root: path.resolve('./app')
				}
			}]
		}]
	},
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.UglifyJsPlugin({			
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			}
		})
	]
};
