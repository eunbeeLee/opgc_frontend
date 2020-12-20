const path = require('path');

module.exports = {
    name: 'opgc',

    mode: 'development',

    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx']
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
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']                
                }
            }
        ]
    },

    output: {
        path: path.join(__dirname, 'dist'), // __dirname - 환경변수로 현재 프로젝트의 절대경로
        filename: 'app.js'
    }
};