const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api',{
            target:'https://gamerk-d9b989fca00f.herokuapp.com/',
            changeOrigin: true,
            pathRewrite:{'^/api':''}
        })
    )
}