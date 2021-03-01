const webpack = require("webpack");
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');
const srcPath = require('path').resolve(__dirname, 'src');
const distPath = require('path').resolve(__dirname, 'dist');

module.exports = (env, options) => {
    dotenv.config({
        path: path.join(__dirname, `.env.${options.mode}`)
    });

    return {
        name: 'opgc',

        // mode: options.mode,

        devtool: 'inline-source-map',

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@': srcPath,
                '~': srcPath,
                '@@': srcPath,
                '~~': srcPath,
            },
        },

        entry: {
            app: [path.join(srcPath, '/index')]
        },

        module: {
            rules: [
                {
                    test: /\.jsx?/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    browsers: ['last 2 chrome versions']
                                }
                            }], 
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            (process.env.NODE_ENV !== 'production') && require.resolve('react-refresh/babel'),
                        ].filter(Boolean)
                    }
                },
                { test: /\.tsx?$/, loader: 'ts-loader' },
                { test: /\.css/, use: [ 'style-loader', 'css-loader' ]}
            ]
        },

        plugins: [
            new webpack.DefinePlugin({}),
            (process.env.NODE_ENV !== 'production') && new ReactRefreshWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(srcPath, '/index.html'),
            }),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(srcPath, 'assets'), to: 'assets' }
                ],
            }),
        ].filter(Boolean),

        output: {
            path: distPath,
            filename: 'app.js',
        },

        devServer: {
            contentBase: path.join(distPath),
            hot: true,
            historyApiFallback: true,
            port: 52203
        }
    }
};