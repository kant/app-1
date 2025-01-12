// const nextRuntimeDotenv = require('next-runtime-dotenv');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextTranslate = require('next-translate');
// const { i18n } = require('./i18n');

// const withConfig = nextRuntimeDotenv({
//   // path: '.env',
//   public: ['MY_API_URL', 'NEXT_PUBLIC_ID'],
//   server: ['GITHUB_TOKEN'],
// });

module.exports = withBundleAnalyzer(nextTranslate({
  // rest of config here
  // i18n,
  reactStrictMode: true,
  trailingSlash: false,
  serverRuntimeConfig: {
    // Will only be available on the server side
    BREATHECODE_HOST: process.env.BREATHECODE_HOST,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN, // Pass through env variables
    BC_ACADEMY_TOKEN: process.env.BC_ACADEMY_TOKEN,
    SYLLABUS: process.env.SYLLABUS,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    BREATHECODE_HOST: process.env.BREATHECODE_HOST,
    NEXT_PUBLIC_ID: process.env.NEXT_PUBLIC_ID,
    BC_ACADEMY_TOKEN: process.env.BC_ACADEMY_TOKEN,
    SYLLABUS: process.env.SYLLABUS,
  },
  images: {
    // whitelist for image providers
    domains: ['assets.vercel.com', 'github.com', 'raw.githubusercontent.com'],
    // formats: ['image/avif', 'image/webp'],
  },
  env: {
    BREATHECODE_HOST: process.env.BREATHECODE_HOST,
    BC_ACADEMY_TOKEN: process.env.BC_ACADEMY_TOKEN,
    SYLLABUS: process.env.SYLLABUS,
  },
}));
