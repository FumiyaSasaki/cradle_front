/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
