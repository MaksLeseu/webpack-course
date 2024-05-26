import path from 'path'
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

type ModeType = 'development' | 'production'

type EnvVariables = {
    mode: ModeType
}

module.exports = (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',            // This code allows to use to scripts for dev and prod development
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: '[name].[contenthash].js',    // This line allows webpack to create other name for js file. When the browser will check this file, if we will not add changes, the browser will take data from cache.
            path: path.resolve(__dirname, 'dist'),
            clean: true                             // to remove main.js when the webpack is working agan
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })  // This is a plugin to allow me to insert js file to the index.html file
        ],
    }
    return config
};