/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'static.xx.fbcdn.net', 'scontent-iad3-2.xx.fbcdn.net', 'platform-lookaside.fbsbx.com'
    , 'images.pexels.com'],
  }
}

module.exports = nextConfig