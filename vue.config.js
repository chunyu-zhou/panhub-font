const fs = require('fs')
const glob = require('glob')

// 简单学习 glob https://www.cnblogs.com/liulangmao/p/4552339.html
const pages = {}
let entries
try {
    entries = glob('src/pages/*/main.js', { sync: true })
} catch (err) {
    entries = []
    throw err
}
entries.forEach((file) => {
    const fileSplit = file.split('/')
    const pageName = fileSplit[2]
    let pageHtml = fileSplit.slice(0, 3).join('/') + '/index.html'
    if (!fs.existsSync(pageHtml)) {
        pageHtml = fileSplit.slice(0, 2).join('/') + '/_default.html'
    }
    pages[pageName] = {
        entry: file,
        template: pageHtml,
        filename: `${pageName}.html`
    }
})

module.exports = {
    pages,
    baseUrl: '/',
    outputDir: 'dist',
    lintOnSave: true,
    /* chainWebpack: (config) => {
      const env = (process.env.VUE_APP_ENV).toUpperCase()
      console.log(`当前环境: ${env}`)
    }, */
    chainWebpack: config => {
        const env = (process.env.VUE_APP_ENV).toUpperCase()
        console.log(`当前环境: ${env}`)
        Object.keys(pages).forEach(entryName => {
            config.plugins.delete(`prefetch-${entryName}`)
        })
    },
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            less: { javascriptEnabled: true }
        }
    },
    parallel: require('os').cpus().length > 1,
    pluginOptions: {},
    devServer: {
        open: false,
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8000,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                // 测试环境
                target: process.env.VUE_APP_API_URL, // 接口域名
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/api': '' // 需要rewrite重写的,
                }
            } // string | Object
            /* before: (app) => {
            } */
        }
    }
}