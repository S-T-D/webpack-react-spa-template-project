const path = require('path');

module.exports = {
    // 运行模式 development | production
    mode: 'production',
    // 指定构建入口，webpack 将从此文件开始构建整个应用
    entry: './src/index.js',
    // 指定构建好的资源的输出位置
    // 下方配置会在项目的 dist 目录下生成 bundle.js 文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};