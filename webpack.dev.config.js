const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/webapp/javascript/main.jsx',
    output: {
        path: path.resolve(__dirname, 'build/resources/main/static/'),
        filename: 'react-app.js',
        publicPath: '/dist'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8080,
        hot: true,
        static: path.join(__dirname, 'build/resources/main/static/')
    }
};