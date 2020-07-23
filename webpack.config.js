const webpack = require('webpack');
const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



const config = {
    entry: {
        index:  './src/index.js',
    },  
    output: {
        filename: 'js/[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "useBuiltIns": "entry",
                                }
                            ]
                        ],
                        
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif|mp4)$/,
                use: {
                    loader:"file-loader",
                    options: {
                        name: 'img/[name].[ext]',
    
                    }
                    
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true,
                            attributes: {
                                list: [
                                  {
                                    tag: 'img',
                                    attribute: 'src',
                                    type: 'src',
                                  },
                                  {
                                    tag: 'img',
                                    attribute: 'srcset',
                                    type: 'srcset',
                                  },
                                  {
                                    tag: 'img',
                                    attribute: 'data-src',
                                    type: 'src',
                                  },
                                  {
                                    tag: 'img',
                                    attribute: 'data-srcset',
                                    type: 'srcset',
                                  },
                                  {
                                    tag: 'video',
                                    attribute: 'src',
                                    type: 'src',
                                  },
                                  {
                                    tag: 'video',
                                    attribute: 'data-src',
                                    type: 'src',
                                  },
                                  
                                  // More attributes
                                ],
                            }    

                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            },
            
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
        //     intersectionObserver: 'intersection-observer',
            // objectFitVideos: 'object-fit-videos',
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),

    ]
};



module.exports = config;