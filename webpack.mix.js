let mix = require('laravel-mix');
let webpack = require('webpack');

mix.js('JS/app.js', 'build')
// mix.webpackConfig({
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//     compress: {
//         warnings: false
//     }
// })
//     ]
// })