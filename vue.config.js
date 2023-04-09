const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

    devServer: {
        proxy: 'https://dev-crawler-api.trainery.live',
    }
})
