const { config } = require('dotenv')

config()

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true
    },

    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(graphql|gql)/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
        })

        return config
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/**'
            }
        ]
    }
}

console.log(process.env.PORT)

module.exports = nextConfig
