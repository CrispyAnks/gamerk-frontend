const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api',{
            target:'https://gamerk-7e8d0e0cac82.herokuapp.com/',
            changeOrigin: true,
            pathRewrite:{'^/api':''}
        })
    )
}
