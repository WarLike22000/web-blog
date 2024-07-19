import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    dest: "public",
    cacheStartUrl: true,
    dynamicStartUrl: true,
    disable: process.env.NODE_ENV === "development",
})

/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "utfs.io"
            }
        ],
    },
};

export default withPWA(nextConfig);