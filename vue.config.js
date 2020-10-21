module.exports = {
    devServer: {
        host: "192.168.0.158",
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