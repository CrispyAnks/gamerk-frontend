const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api',{
            target:'https://hal-th23-gamerk-ih15-a26.azurewebsites.net/',
            //target:'http://localhost:8080/',
            changeOrigin: true,
            pathRewrite:{'^/api':''}
        })
    )
}
