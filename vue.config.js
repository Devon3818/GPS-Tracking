var TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/wx/'
    : '/',
    chainWebpack: config => {
        config.resolve.alias
        .set('cube-ui', 'cube-ui/lib')
    },
    configureWebpack: {
        plugins: [
            new TransformModulesPlugin()
        ]
    }
}
