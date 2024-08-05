/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'stg',
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
