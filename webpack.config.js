const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',

    output: {
        path: path.resolve('dist'),
        publicPath: "/",
        filename: 'bundle.js'
    },

    devServer: {
        noInfo: true,
        port: 9000,
        contentBase: './dist',
        historyApiFallback: true,
        proxy: {
            "/auth": {
                'target': "http://localhost:3000",
                "secure": false,
                "changeOrigin": true
            }
        }
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({filename: 'style.css'})
    ],

    module:
        {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss/,
                    exclude: /node_modules/,
                    loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
            ],
        }
    ,
}
;