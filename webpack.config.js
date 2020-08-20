const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    context : __dirname + '/public',
    entry: './app.js',
    devtool: 'source-map',
    // debug: true,
    // watch:true,    
    mode : 'development',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath : '/'
    },   
    module: {
        rules: [{
                test: /\.(jpg|jpeg|png|gif|svg|ico|ttf)$/i,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

        ]
    }

};
