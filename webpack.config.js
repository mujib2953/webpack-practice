const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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
