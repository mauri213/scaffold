// webpack.config.js
module.exports = {
	entry: './src/js/main.js', //string
	output: { // object
		path: './dist', //bundle of files
		filename: 'bundle.js' //green means good
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.js$/, // only going to load files with .js
				exclude: /(node_modules)/,
				query: {
					presets: ['react']

				}
			}
		]
	}
};