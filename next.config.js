const {resolve} = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config) => {
        config.resolve.alias['@'] = resolve(__dirname, 'src');
        return config;
    },
};

module.exports = nextConfig;
