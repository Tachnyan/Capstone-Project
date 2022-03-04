const path = require("path/posix");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin")

const config = {
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.(c|sa|sc|le)ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react"
        })
    ],
};


const login = Object.assign({}, config, {
    name: "login",
    entry: './SITE/Login/src/index.jsx',
    output: {
        path: path.resolve(__dirname, './API/SSO/src/LoginBuild'),
        filename: '[name].js'
    },
    devtool:'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: "./template/index.html"
        }),
        new webpack.ProvidePlugin({
            "React":"react"
        })
    ]
});


module.exports = [login]