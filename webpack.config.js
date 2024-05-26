const path = require('path');

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',    // This code allows to use to scripts for dev and prod development
        entry: './src/index.js',
        output: {
            filename: '[name].[contenthash].js',    // This line allows webpack to create other name for js file. When the browser will check this file, if we will not add changes, the browser will take data from cache.
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
    }
};