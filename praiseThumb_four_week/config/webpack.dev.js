const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const Manifest = require('webpack-manifest');
console.log('==========', 'dev');
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/indexadd.js')
        ],
        tags: [
            path.join(__dirname, '../src/public/scripts/tags.es'),
            path.join(__dirname, '../src/public/scripts/star.es')
        ]
    },
    output: {
        filename: 'public/scripts/[name].js',
        path: path.join(__dirname, '../build')
    },
    module: {
        rules: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015',
                        'stage-0'
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'dev'
            }
        }),
        new LiveReloadPlugin({ appendScriptTag: true }),
        new ExtractTextPlugin("public/css/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/common/vendor.min.js'
        }),
        new HtmlwebpackPlugin({
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject: false
        }),
        new HtmlwebpackPlugin({
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject: false,
            chunks: ['vendor', 'index', 'tags']
        }),
        new HtmlwebpackPlugin({
            filename: './widget/index.html',
            template: 'src/widget/index.html',
            inject: false
        }),
        new HtmlwebpackPlugin({
            filename: './views/star.html',
            template: 'src/views/star.js',
            inject: false,
            chunks: ['vendor', 'index', 'tags']
        }),
        new HtmlwebpackPlugin({
            filename: './widget/star.html',
            template: 'src/widget/star.html',
            inject: false
        }),
        new Manifest({
            cache: [
                '../public/css/vendor.css',
                '../public/scripts/common/vendor.min.js',
                '../public/scripts/tags.js',
                '../public/scripts/index.js'
            ],
            //Add time in comments. 
            timestamp: true,
            // 生成的文件名字，选填 
            // The generated file name, optional. 
            filename: 'cache.manifest',
            // 注意*星号前面用空格隔开 
            network: [
                '*'
            ],
            // 注意中间用空格隔开 
            // fallback: ['/ /404.html'],
            // manifest 文件中添加注释 
            // Add notes to manifest file. 
            headcomment: "koatesting",
            master: ['../views/layout.html']
        })
    ]
}