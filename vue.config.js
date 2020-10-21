module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: "8081",
        open: true,
        proxy: {
            '/api': {
                'target': 'https://x.dscmall.cn/api/',
                'changeOrigin': true,
                'ws': true,
                'pathRewrite': {
                    '^/api': ''
                },
            },
        }
    }
}

// https://x.dscmall.cn/api/catalog/list