/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'brendan-watson-images-website-storage.s3.eu-west-2.amazonaws.com',
          },
        ],
      },
}

module.exports = nextConfig
