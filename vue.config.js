const { defineConfig } = require('@vue/cli-service')
const path = require('path')  // <-- Import path module

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')  // <-- Ensure @ maps to src/
      }
    }
  }
})
