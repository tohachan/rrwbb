const fs = require('fs');
const path = require("path");
const WebpackBar = require('webpackbar');
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    output: {
        path: path.join(__dirname, "../../build/public"),
        publicPath: "/public"
    },

    resolve: {
        modules: [
            path.join(__dirname, '../../node_modules'),
            path.join(__dirname, '../../src'),
        ]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // Use this later for JAM build
        // new HtmlWebpackPlugin({
        //     filename: "index.html",
        //     template: path.join(__dirname, "src", "index.html")
        // }),
        new WebpackBar({
            color: '#1b78bf'
        })
    ],
};
