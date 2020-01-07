module.exports = {
    devServer : {
        port: 8080,
        proxy : {
            '/api' : {
                target : 'http://apiao.natapp1.cc',
                changeOrigin : true,
                 pathRewrite: {
                   '^/api': ''
                 }
            }
        }
    }
}