/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.hashnode.com',
      'github.com',
      'images.unsplash.com',
      'raw.githubusercontent.com',
      'res.cloudinary.com',
      'imgur.com',
      'i.imgur.com',
      'upload.wikimedia.org',
      'media.githubusercontent.com'
    ],
    unoptimized: true
  },
  basePath: '/folio-v1',
  assetPrefix: '/folio-v1/',
  output: 'export'
}

module.exports = nextConfig
