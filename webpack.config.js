var path = require('path');
var webpack = require('webpack');

module.exports = {  
    entry: "./JS/app.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
    ]
};