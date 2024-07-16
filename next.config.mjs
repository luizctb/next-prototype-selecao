/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: '**',
       },
       {
         protocol: 'http',
         hostname: 'localhost',
       },
       {
         protocol: 'https',
         hostname: 'your-external-domain.com',
       },
     ],
   },
 };
 
 export default nextConfig;