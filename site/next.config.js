/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Taomyn',
    description: 'Taomyn store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: '',
    contactUrl: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
