const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main/webapp/javascript/main.jsx',
    output: {
        path: path.resolve(__dirname, './src/main/resources/static/dist'),
        filename: 'react-app.js'
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
    }
};