const sassResourcesLoader = require('craco-sass-resources-loader')
const path = require('path')

module.exports = {
    mode: 'development',
    output: {
        path: __dirname,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: './src/sass/variables.scss',
            },
        },
    ],
}
