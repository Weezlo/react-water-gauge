module.exports = {
	entry: './index.js',
	output: {
		library: 'WaterGauge',
		filename: 'WaterGauge.js',
		path: __dirname + '/dist'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
 					presets: ['es2015', 'react']
				}
			}
		]
	}
};