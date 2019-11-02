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
                test: /\.css$/,
                use: [
                    "style-loader", // --- 2. And then this will execute
                    "css-loader",   // --- 1. This will execute
                ]
            }
        ]
    }
};
