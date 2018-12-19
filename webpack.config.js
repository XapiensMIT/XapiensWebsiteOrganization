const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Load *package.json* so we can use `dependencies` from there
const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    images: path.join(__dirname, 'app/assets/images'),
    fonts: path.join(__dirname, 'app/assets/fonts'),
    node: path.join(__dirname, 'node_modules')
};

const common = {
    // Entry accepts a path or an object of entries. We'll be using the
    // latter form given it's convenient with more complex configurations.
    entry: {
        app: path.join(PATHS.app, 'index.jsx')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        // Output using entry name
        filename: '[name].js',
        globalObject: "this"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: PATHS.app,
                exclude: PATHS.node,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                // Test expects a RegExp! Note the slashes!
                test: /\.css$/,
                // Include accepts either a path or an array of paths.
                include: PATHS.app,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            // dp
            // Handle *.jpeg and *.gif images with the file-loader, while
            // completely disabling the url-loader (following commented out
            // setting). This is to stop generating an base64 encoded file
            // representation of an imported *.png file instead of copying
            // the binary file. Revisit if anything breaks.
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                include: PATHS.images,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            name: '[name].[ext]',
                            outputPath: '/assets/images/'
                        }
                    }
                ]
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //         }
            //     ]
            // },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(PATHS.app, '/index.html'),
        })
    ]
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: './build/',
            watchContentBase: true,
            compress: true,
            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,
        }
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {
        optimization: {
            minimizer: [
                new TerserPlugin({
                  terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false
                },
                extractComments: true,
                warningsFilter: (warning, source) => {
                    return false;
                  },
              })
            ],
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'initial',
                        name: 'vendor',
                        test: 'vendor',
                        enforce: true
                    },
                }
            },
            runtimeChunk: true
        },
        plugins: [
            // Setting DefinePlugin affects React library size!
            // DefinePlugin replaces content "as is" so we need some extra quotes
            // for the generated code to make sense
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
                // You can set this to JSON.stringify('development') for your
                // development target to force NODE_ENV to development mode
                // no matter what
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new CompressionPlugin({
              algorithm: "gzip",
              test: /\.js$|\.css$|\.html$/,
              minRatio: 0
            })
        ]
    });
}
