const { createProxyMiddleware } = require("http-proxy-middleware");
/**配置代理服务器 */
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api", {//匹配所有以/api开头的请求路径
      target: "http://172.22.236.55:8080/docker",//代理目标的基础路径
      changeOrigin: true,//支持跨域
      pathRewrite: {//重写路径，去掉路径开头的/api
        "^/api": "/"
      }
    })
  );
};
