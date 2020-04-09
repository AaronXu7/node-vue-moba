const path = require('path');

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'common-cpn':'@/components/common',
                'content-cpn':'@/components/content'
            }
        }
    }
}