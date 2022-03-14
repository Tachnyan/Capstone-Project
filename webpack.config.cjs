const path = require("path");
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devtool:'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: "./template/index.html"
        }),
        new webpack.ProvidePlugin({
            "React":"react"
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ]
};


const login = Object.assign({}, config, {
    name: "login",
    entry: '/SITE/Login/src/index.jsx',
    output: {
        path: path.join(__dirname, '/API/SSO/src/LoginBuild'),
        filename: 'login-[name].js'
    }
});

const mainSite = Object.assign({}, config, {
    name: "mainSite",
    entry: './SITE/smartgroup/src/index.jsx',
    output: {
        path: path.join(__dirname, './API/SSO/src/SiteBuild'),
        filename: 'sb-[name].js'
    }
})


module.exports = [login, mainSite]