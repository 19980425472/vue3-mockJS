module.exports = {
    lintOnSave: false, //是否开启eslint
    // webpack-dev-server 相关配置
    devServer: {
        hot: true,
        open: true,
        // host: '0.0.0.0',
        port: 9999,
        // https: false,
        // hotOnly: false,
        // proxy: {
        //     "/api": {
        //         target: 'http://192.168.0.14:8863/secondary-water-supply',
        //         ws: false, //websockets
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "^/api": "/api"
        //         }
        //     }
        // },

    },
    //基本路径
    publicPath: './',
    configureWebpack: {
        externals: {
            'AMap': 'AMap'
        },

    },


}