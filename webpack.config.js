const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // --- 2. inject the commonJS to HTML
                    "css-loader",   // --- 1. Change css to commonJS
                    "sass-loader",  // --- 1. Convert scss to css
                ]
            },
        ]
    }
};
