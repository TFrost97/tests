const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: { 
       main: './src/entry.js',
    },
    output: {
        filename: '[name][hash]-output.js',
        path: path.resolve(__dirname, '../', 'build')
    },

    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../', 'public')

    },

    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "new app",
            template: "src/template.html"
        }),
    ]
}