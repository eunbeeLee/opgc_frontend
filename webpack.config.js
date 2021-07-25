const webpack = require("webpack");
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');
const srcPath = require('path').resolve(__dirname, 'src');
const distPath = require('path').resolve(__dirname, 'dist');

/**
 * typescript 해석을 위한 Loader를 얻어온다.
 * developemtn - 정확한 타입체크를 위해 'ts-loader' 사용
 * production - 빠른 빌드를위해 'babel & preset-typesciprt' 사용
 * @returns 
 */
function getTsLoader (mode) {
    if (mode === 'development') {
        return [{ loader: 'ts-loader'}];
    } else {
        return [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['last 2 chrome versions']
                            }
                        }], 
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                    ]
                }
            }
        ];
    }
}

module.exports = (env, options) => {
    const isEnvDevelopment = options.mode === 'development'
    const isEnvProduction = options.mode === 'production'

    dotenv.config({
        path: path.join(`./.env.${options.mode}`)
    });

    const config = {
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
                    test: /\.tsx?$/, 
                    use: getTsLoader(options.mode),
                },
                { test: /\.css/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ]}
            ]
        },

        plugins: [
            new MiniCssExtractPlugin({ filename: 'assets/css/app.css' }),
            new webpack.DefinePlugin({}),
            isEnvDevelopment && new ReactRefreshWebpackPlugin(),
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
            filename: '[name].[hash].js',
        },

        devServer: {
            contentBase: path.join(distPath),
            hot: true,
            historyApiFallback: true,
            proxy: {
                '/': {
                    target: process.env.BASE_URL,
                    secure: false,
                    changeOrigin: true
                },
            }
        },
    }

    if (isEnvProduction) {
        config.optimization = {
            minimize: true,
            splitChunks: {
              chunks: 'all',
            },
        };
    }

    return config;
};