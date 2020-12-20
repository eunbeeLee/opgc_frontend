const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'opgc',

    mode: 'development',

    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    entry: {
        app: ['./index']
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
                        'react-refresh/babel'
                    ]                
                }
            },
            { test: /\.tsx?$/, loader: "ts-loader" },
        ]
    },

    plugins: [
        new ReactRefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'), // __dirname - 환경변수로 현재 프로젝트의 절대경로
        filename: 'app.js',
        publicPath: '/dist/',
    },

    devServer: {
        publicPath: '/dist/',
        hot: true
    }
};