const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const nodeExternals = require( 'webpack-node-externals' );

module.exports = {
	target: 'node',
	externals: [ nodeExternals() ],
};
