import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import environment from './webpack/enviornment.js';
import path from 'path';

const config = {
    entry: environment.hotModule(),
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                include: [
                    path.resolve(__dirname, './app')
                ],
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(hbs)$/,
                use: [{ loader: 'handlebars-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]",
                    },
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            disable: environment.embeddedStyles()
        }),
        new HtmlWebpackPlugin({
            tile: 'Home Page Template',
            template: path.resolve(__dirname, './server/views/main.hbs'),
            inject: '</body>',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        children: false
    }
};

export default config;