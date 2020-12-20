const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path');
const srcPath = require('path').resolve(__dirname, 'src');
const distPath = require('path').resolve(__dirname, 'dist');

module.exports = {
    name: 'opgc',

    mode: 'development',

    devtool: 'eval',

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
        app: ['./src/index']
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
        path: distPath, // __dirname - 환경변수로 현재 프로젝트의 절대경로
        filename: 'app.js',
        publicPath: '/dist/',
    },

    devServer: {
        publicPath: '/dist/',
        hot: true
    }
};