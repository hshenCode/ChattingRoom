/**
 * Created by hshen on 9/20/16.
 */

// Define paths
const path = require('path');
const PATHS = {
    app: path.join(__dirname, 'client', 'src'),
    build: path.join(__dirname, 'client', 'build')
};

// A tool to merge config object
const merge = require('webpack-merge');

// Configuration for plugins
const plugins = require('./webpack.plugins');

// Common configuration for production and dev
const common = merge(
    {
        entry: {
            index: path.join(PATHS.app,'js','pages','index.js'),
        },
        output: {
            path: path.join(PATHS.build,'js'),
            filename: '[name].js',
            chunkFilename: '[chunkhash].js'
        },
        resolve: {
            root: [
                PATHS.app
            ],
            alias: {
                js: 'js',
                css: 'less'
            },
            extensions: ['', '.js', '.jsx']
        }
    },
    plugins.clean(PATHS.build),
    plugins.copy(),
    plugins.extractCommon('common.js'),
    plugins.less(),
    plugins.babel()
);

var config = null;

// Detect the branch where npm is running on
switch(process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(
            common,
            plugins.minify()
        );
        break;

    case 'dev':
    default:
        config = merge(
            common,
            // Set source map for debug
            {
                devtool: 'source-map'
            }
        );
        break;
}

module.exports = config;
