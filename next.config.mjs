/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'home',
    assetPrefix: '/stg/home',
    basePath: '/stg/home',
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
