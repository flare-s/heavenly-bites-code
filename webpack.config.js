const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



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
                                    useBuiltIns: "usage",
                                    corejs: '3',
                                }
                            ]
                        ],
                        
                    }
                }
            },
            // {
            //     test: /\.(png|svg|jpg|gif|mp4)$/,
            //     use: {
            //         loader:"file-loader",
            //         options: {
            //             name: 'img/[name].[ext]',
    
            //         }
                    
            //     }
            // },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset',
                generator: {
                    filename: './img/[hash][ext][query]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        
                        options: {
                            minimize: true,
                            sources: {
                                list: [
                                    // All default supported tags and attributes
                                    "...",
                                    {
                                        tag: "img",
                                        attribute: "data-src",
                                        type: "src",
                                    },
                                    {
                                        tag: "img",
                                        attribute: "data-srcset",
                                        type: "srcset",
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
                                      }
                                ]
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
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),

    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,
    }
};



module.exports = config;