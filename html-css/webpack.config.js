const path = require("path")
const basePath = __dirname
const disPath = "dist"

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode:"production",
    entry: {
        app: "./src/index.js"
    },

    module: {
        rules: [
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
        }),

        new MiniCssExtractPlugin(),
    ],

    output: {
        path: path.join(basePath, disPath),
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
};