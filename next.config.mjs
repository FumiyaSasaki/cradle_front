const prefixPath = String(process.env.NEXT_PUBLIC_NODE_ENV);

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'home',
    assetPrefix: prefixPath,
    basePath: prefixPath,
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
