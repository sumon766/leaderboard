const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: { 
        index: path.resolve(__dirname, "src", "index.js"),
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    devtool: 'inline-source-map',

    devServer: {
        static: path.resolve(__dirname,"dist"),
        liveReload: true
    },

    optimization: {
        runtimeChunk: 'single',
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html"),
        })
    ],

    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
    },
};