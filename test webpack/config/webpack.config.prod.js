const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: { 
       main: './src/entry.js',
    },
    output: {
        filename: '[name]-output.js',
        path: path.resolve(__dirname, '../', 'build')
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
        new CleanWebpackPlugin()
    ]
}