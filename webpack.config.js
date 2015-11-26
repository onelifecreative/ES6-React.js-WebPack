var path = require('path');

module.exports = {
	entry:'./__app__/app.js',
	output: {
		filename:'./_public/_assets/js/bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.es6|js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				presets:['es2015','react']
			}
		]
	},
	resolve:{
		extensions:['','.js','.es6']
	}
};