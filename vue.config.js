module.exports = {
    lintOnSave: false,

    devServer:{
        // 配置代理
        proxy: {
          "/api": {
            target: "http://39.98.123.211", 
            
          }
        }
      }
}