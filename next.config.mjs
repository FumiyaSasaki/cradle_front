/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'home',
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
