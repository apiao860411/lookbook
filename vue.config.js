const webpack = require('webpack')
module.exports = {
    devServer : {
        port: 8080,
        proxy : {
            '/api' : {
                target : 'http://10.147.87.73',
                changeOrigin : true,
                 pathRewrite: {
                   '^/api': ''
                 }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
     
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    }
}