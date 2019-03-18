const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

	module: {

		rules: [

			{

				test: /\.(js|jsx)$/,

				exclude: /node_modules/,

				use: {

					loader: "babel-loader"

				}

			},

			{

				test: /\.html$/,

				use: [

					{

						loader: "html-loader"

					}

				]

			},

			{

				test: /\.css$/,

				exclude: /node_modules/,

				use: [

					{
						loader: 'style-loader'
					},

					{

						loader: 'css-loader',

						options: {

							importLoaders: 1,

							modules: true,

							localIdentName: '[name]__[local]__[hash:base64:5]'

						}

					}

				]

			}

		]

	},

	plugins: [

		new HtmlWebPackPlugin({

			template: "./src/index.html",

			filename: "./index.html"

		})

	]

};