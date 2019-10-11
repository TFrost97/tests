const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
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
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.(scss|sass)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          }
        ]
      },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "new app",
            template: "src/templates/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}