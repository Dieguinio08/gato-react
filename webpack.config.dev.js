const path= require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'main.[contenthash].js',
        assetModuleFilename: 'static/[hash][ext][query]',
       
    },
    mode: "development",
    resolve:{
        extensions:['.js', '.jsx'],
        alias:{
            '@components':path.resolve(__dirname,'src/components'),
            '@styles':path.resolve(__dirname,'public/styles'),
            '@images':path.resolve(__dirname,'public/images'),
            '@fonts':path.resolve(__dirname,'public/fonts'),
        }

    },
    optimization: {minimize:true},
    performance:{hints:false},
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }    
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg)/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/[name][hash][ext]"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),

    ],

    devServer: {
		historyApiFallback: true,
	}
}