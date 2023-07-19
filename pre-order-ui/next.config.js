/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: "http://18.143.102.131:44391/api",
    // NEXT_PUBLIC_BEANOI_URL: "https://api.beanoi.com/api",
    NEXT_PUBLIC_TESTGZP_URL: "http://18.143.102.131:44391/api",
  },
  trailingSlash: true,
  output: 'export'

}

module.exports = nextConfig
