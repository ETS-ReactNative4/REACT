const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
        {
            test :/\.css$/,
            use:["style-loader", "css-loader"]
        },    
        {
            test :/\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    optimization: {
        splitChunks: {chunks:"all", name :"vendor"}
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};