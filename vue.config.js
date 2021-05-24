const path = require('path')

module.exports = {
    // 修改默认的入口
    pages: {
        index: {
            entry: "examples/main.js",
            template:"public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        // vue 默认@指向src目录，这里要修正为examples，另外新增一个 提示项packages
        // config.resolve.alias
        //     .set('@', path.resolve('examples'))
        //     .set('~', path.resolve('packages')),
        // config.module
        //     .rule('eslint')
        //     .exclude.add(path.resolve('lib'))
        //     .end()
        //     .exclude.add(path.resolve('examples/docs'))
        //     .end()
        // packages 和 examples 目录需要加入编译
        // config.module
        //     .rule('js')
        //     .inculde.add(/packages/)
        //     .end()
        //     .inculde.add(/examples/)
        //     .end()
        //     .use('babel')
        //     .loader('babel-loader')
        //     .tap(options => {
        //         // 修改它的选项
        //         return options;
        //     })
        config.module
            .rule('js')
            .include.add('/packages')
            .end()
            .use('babel').loader('babel-loader')
    }
}