import createMDX from '@next/mdx';
import remarkGFM from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const nextMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGFM],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

export default nextMDX(nextConfig);