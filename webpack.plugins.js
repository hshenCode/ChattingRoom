/**
 * Created by hshen on 9/20/16.
 */
const webpack = require('webpack');

exports.minify = function () {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                // Don't beautify output (enable for neater output)
                beautify: false,
                // Eliminate comments
                comments: false,
                compress: {
                    warnings: false,
                    // Drop `console` statements
                    drop_console: true
                }
            })
        ]
    };
}

// Clean a specific folder
exports.clean = function (path) {
    const CleanWebpackPlugin = require('clean-webpack-plugin');

    return  {
        plugins: [
            new CleanWebpackPlugin([path], {
                // Without `root` CleanWebpackPlugin won't point to our
                // project and will fail to work.
                root: process.cwd()
            })
        ]
    };
}

exports.extractCommon = function (name) {
    return {
        plugins: [
            new webpack.optimize.CommonsChunkPlugin(name)
        ]
    };
}

exports.copy = function () {
    const path = require('path');
    const PATHS = {
        app: path.join(__dirname, 'src'),
        build: path.join(__dirname, 'build')
    };
    const CopyWebpackPlugin = require('copy-webpack-plugin');

    return {
        plugins: [
            new CopyWebpackPlugin([
                { from: path.join(PATHS.app,'html'), to: path.join(PATHS.build,'html')},
            ], {
                ignore: [

                ],
                // By default, we only copy modified files during
                // a watch or webpack-dev-server build. Setting this
                // to `true` copies all files.
                copyUnmodified: true
            })
        ]
    };
}

exports.less = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    loader: "style!css!less"
                }
            ]
        }
    };
};

exports.babel = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            ]
        }
    };
};
