const path = require('path'),
    //const ExtractTextPlugin = require('extract-text-webpack-plugin');
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
          }
        ]
      }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
         //new ExtractTextPlugin(
         //  {filename: 'style.[hash].css', disable: false, allChunks: true }
         //),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash(),
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets',
            toType: 'dir'
        }], {
            debug: 'debug'
        })
    ]
};
