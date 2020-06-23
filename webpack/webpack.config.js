const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

//const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //Não funciona mais no ECS6
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            /*new UglifyJsPlugin({  //Não funciona mais no ECS6
                cache: true,
                parallel: true
            }),*/
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //Pode ou não começar com "S", em seguida pode ter "A" ou "C" e termina com "SS"
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CSS dentro da DOM injetando a tag style
                'css-loader', // interpreta @import, url() dentro do CSS
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|git)$/,
            use: ['file-loader']
        }]
    }
}

/*Para iniciar no modo de desenvolvimento: npm start
  Para iniciar no modo de produção: npm run build*/