const nodeExternals = require("webpack-node-externals");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const glob = require("glob");

module.exports = {
    entry: glob
        .sync("./dist/typescript/*.tsx")
        .reduce(function(entry, filePath) {
            entry[path.parse(filePath).name] = filePath;
            return entry;
        }, {}),
    externals: [nodeExternals()],
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist", "javascript"),
        library: ["[name]"],
        libraryTarget: "commonjs2"
    },
    devtool: "source-map"
};
