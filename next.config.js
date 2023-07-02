/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = {
//     reactStrictMode: true,
//     pageExtensions: ['ts', 'tsx'],
//     // Define a pasta raiz dos componentes de página
//     pageDirs: ['src/app'],
//   };

// module.exports = {
//     trailingSlash: true,
// }

// module.exports = {
//     exportPathMap: async function (
//       defaultPathMap,
//       { dev, dir, outDir, distDir, buildId }
//     ) {
//       return {
//         '/': { page: '/' },
//         '/fotos.tsx': { page: '/fotos' },
//         '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
//         '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
//         '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
//       }
//     },
//   }