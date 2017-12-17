const path=require('path');
const webpack=require('webpack');
const LiveReloadPlugin=require('webpack-livereload-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const HtmlwebpackPlugin=require('html-webpack-plugin');
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');
console.log('==========','prod');
module.exports={
	entry:{
		index:[
			path.join(__dirname,'../src/public/scripts/index.es'),
			path.join(__dirname,'../src/public/scripts/indexadd.js')
		],
		tags:[
			path.join(__dirname,'../src/public/scripts/tags.es')
		]
	},
	output:{
		filename:'public/scripts/[name]-[hash:5].js',
		publicPath:'http://192.168.1.105:3009/',
		path:path.resolve(__dirname,'../build')
	},
	module:{
		rules:[{
			test:/\.es$/,
			exclude:/(node_modules|bower_components)/,
			use:{
				loader:'babel-loader',
				options:{
					presets:[
						'es2015',
						'stage-0'
					]
				}
			}
		},{
			test:/\.css$/,
			use:ExtractTextPlugin.extract({
				fallback:'style-loader',
				use:'css-loader'
			})
		}]
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:'dev'
			}
		}),
		new LiveReloadPlugin({appendScriptTag:true}),
		new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false,
				drop_console:false
			}
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp:/\.css$/g,
			cssProcessor:require('cssnano'),
			cssProcessorOptions:{discardComments:{removeAll:true}},
			canPrint:true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			filename:'public/scripts/common/vendor-[hash:5].min.js'
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
        })
	]
}